import { CreationAttributes, Op, Transaction } from "sequelize";
import { ResourceRole } from "./resource-role.model";
import { Role } from "../roles/role.model";
import { Resource } from "../resources/resource.model";
import { RoleUser } from "../role-users/role-user.model";
import { EffectivePermissionDto } from "./dto";

/** Include reutilizable: resumen del rol y del recurso. */
const SUMMARIES = [
  {
    model: Role,
    as: "role",
    attributes: ["id", "name"],
  },
  {
    model: Resource,
    as: "resource",
    attributes: ["id", "method", "path", "description"],
  },
];

/**
 * Capa Repository del feature ResourceRoles.
 *
 * Es la única capa que habla directamente con Sequelize.
 */
export class ResourceRolesRepository {
  /** Todas las concesiones activas. */
  public async findAllActive(): Promise<ResourceRole[]> {
    return ResourceRole.findAll({
      where: { status: "active" },
      include: SUMMARIES,
    });
  }

  /** Concesiones activas filtradas por rol y/o recurso. */
  public async findAllActiveFiltered(filters: {
    role_id?: number;
    resource_id?: number;
  }): Promise<ResourceRole[]> {
    const where: Record<string, unknown> = {
      status: "active",
    };

    if (filters.role_id) {
      where.role_id = filters.role_id;
    }

    if (filters.resource_id) {
      where.resource_id = filters.resource_id;
    }

    return ResourceRole.findAll({
      where,
      include: SUMMARIES,
      order: [["id", "ASC"]],
    });
  }

  /** Una concesión por PK. */
  public async findById(
    id: number,
    transaction?: Transaction
  ): Promise<ResourceRole | null> {
    return ResourceRole.findByPk(id, {
      include: SUMMARIES,
      transaction,
    });
  }

  /** Busca una concesión aunque esté activa o inactiva. */
  public async findByRoleAndResource(
    roleId: number,
    resourceId: number
  ): Promise<ResourceRole | null> {
    return ResourceRole.findOne({
      where: {
        role_id: roleId,
        resource_id: resourceId,
      },
    });
  }

  /** Todas las concesiones de un rol. */
  public async findAllByRole(
    roleId: number,
    transaction?: Transaction
  ): Promise<ResourceRole[]> {
    return ResourceRole.findAll({
      where: { role_id: roleId },
      transaction,
    });
  }

  /** Inserta una concesión. */
  public async create(
    data: CreationAttributes<ResourceRole>,
    transaction?: Transaction
  ): Promise<ResourceRole> {
    return ResourceRole.create(data, { transaction });
  }

  /** Actualiza una concesión. */
  public async update(
    resourceRole: ResourceRole,
    data: Partial<ResourceRole>,
    transaction?: Transaction
  ): Promise<ResourceRole> {
    return resourceRole.update(data, { transaction });
  }

  /**
   * Consulta los permisos efectivos de un usuario.
   *
   * Cadena:
   * role_users → roles → resource_roles → resources
   *
   * Todos los eslabones deben estar activos.
   */
  public async findEffectiveForUser(
    userId: number
  ): Promise<EffectivePermissionDto[]> {
    const rows = await ResourceRole.findAll({
      where: { status: "active" },
      attributes: ["id"],
      include: [
        {
          model: Role,
          as: "role",
          required: true,
          attributes: ["id", "name"],
          where: { status: "active" },
          include: [
            {
              model: RoleUser,
              as: "role_users",
              required: true,
              attributes: [],
              where: {
                status: "active",
                user_id: userId,
              },
            },
          ],
        },
        {
          model: Resource,
          as: "resource",
          required: true,
          attributes: [
            "id",
            "method",
            "path",
            "description",
          ],
          where: { status: "active" },
        },
      ],
      order: [["id", "ASC"]],
    });

    return rows.map((row) => {
      const plain = row.toJSON() as unknown as {
        role: {
          id: number;
          name: string;
        };
        resource: {
          id: number;
          method: string;
          path: string;
          description: string | null;
        };
      };

      return {
        resource_id: plain.resource.id,
        method: plain.resource.method,
        path: plain.resource.path,
        description: plain.resource.description,
        role_id: plain.role.id,
        role_name: plain.role.name,
      };
    });
  }

  /** Cuenta las concesiones activas de un rol. */
  public async countActiveByRole(roleId: number): Promise<number> {
    return ResourceRole.count({
      where: {
        role_id: roleId,
        status: "active",
      },
    });
  }

  /** Cuenta las concesiones activas totales. */
  public async countActive(): Promise<number> {
    return ResourceRole.count({
      where: { status: "active" },
    });
  }

  /** Cuenta concesiones activas de una lista de recursos. */
  public async countActiveByResources(
    resourceIds: number[]
  ): Promise<number> {
    if (resourceIds.length === 0) {
      return 0;
    }

    return ResourceRole.count({
      where: {
        resource_id: {
          [Op.in]: resourceIds,
        },
        status: "active",
      },
    });
  }
}
