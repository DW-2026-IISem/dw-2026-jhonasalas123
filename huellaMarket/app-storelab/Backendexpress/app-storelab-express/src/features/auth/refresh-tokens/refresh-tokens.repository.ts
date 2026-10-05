import { CreationAttributes, Op, Transaction } from "sequelize";
import { RefreshToken } from "./refresh-token.model";

/**
 * Repository del feature RefreshTokens.
 *
 * Única capa que habla directamente con Sequelize.
 */
export class RefreshTokensRepository {
  /**
   * Busca por hash del token.
   *
   * Cuando lock=true y existe una transacción, bloquea la fila
   * para evitar dos rotaciones concurrentes del mismo token.
   */
  public async findByHash(
    tokenHash: string,
    transaction?: Transaction,
    lock = false
  ): Promise<RefreshToken | null> {
    return RefreshToken.findOne({
      where: { token_hash: tokenHash },
      transaction,
      ...(lock ? { lock: transaction?.LOCK.UPDATE } : {}),
    });
  }

  /**
   * Sesiones de un usuario.
   */
  public async findAllByUser(
    userId: number,
    onlyActive = true
  ): Promise<RefreshToken[]> {
    const where: Record<string, unknown> = { user_id: userId };

    if (onlyActive) {
      where.status = "active";
    }

    return RefreshToken.findAll({
      where,
      order: [["createdAt", "DESC"]],
    });
  }

  /**
   * Busca una sesión por ID.
   */
  public async findById(id: number): Promise<RefreshToken | null> {
    return RefreshToken.findByPk(id);
  }

  /**
   * Crea una sesión.
   */
  public async create(
    data: CreationAttributes<RefreshToken>,
    transaction?: Transaction
  ): Promise<RefreshToken> {
    return RefreshToken.create(data, { transaction });
  }

  /**
   * Actualiza una sesión.
   */
  public async update(
    token: RefreshToken,
    data: Partial<RefreshToken>,
    transaction?: Transaction
  ): Promise<RefreshToken> {
    return token.update(data, { transaction });
  }

  /**
   * Revoca toda una familia de refresh tokens.
   */
  public async revokeFamily(
    familyId: string,
    transaction?: Transaction
  ): Promise<number> {
    const [updated] = await RefreshToken.update(
      { status: "inactive" },
      {
        where: {
          family_id: familyId,
          status: "active",
        },
        transaction,
      }
    );

    return updated;
  }

  /**
   * Revoca todas las sesiones activas de un usuario.
   */
  public async revokeAllByUser(userId: number): Promise<number> {
    const [updated] = await RefreshToken.update(
      { status: "inactive" },
      {
        where: {
          user_id: userId,
          status: "active",
        },
      }
    );

    return updated;
  }

  /**
   * Elimina sesiones inactivas o expiradas.
   */
  public async purgeInactiveByUser(userId: number): Promise<number> {
    return RefreshToken.destroy({
      where: {
        user_id: userId,
        [Op.or]: [
          { status: "inactive" },
          { expires_at: { [Op.lt]: new Date() } },
        ],
      },
    });
  }

  /**
   * Cuenta las sesiones activas de un usuario.
   */
  public async countActiveByUser(userId: number): Promise<number> {
    return RefreshToken.count({
      where: {
        user_id: userId,
        status: "active",
      },
    });
  }
}
