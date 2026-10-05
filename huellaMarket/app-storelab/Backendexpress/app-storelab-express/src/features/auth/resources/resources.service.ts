import { AppError } from "../../../shared/errors/app-error";
import { Resource } from "./resource.model";
import { ResourcesRepository } from "./resources.repository";
import {
  CreateResourceDto,
  PatchResourceDto,
  UpdateResourceDto,
  ResourceResponseDto,
  toResourceResponse,
} from "./dto";

export class ResourcesService {
  private readonly repository = new ResourcesRepository();

  public async getAll(): Promise<ResourceResponseDto[]> {
    const resources = await this.repository.findAllActive();
    return resources.map(toResourceResponse);
  }

  public async getOne(id: number): Promise<ResourceResponseDto> {
    const resource = await this.repository.findById(id);

    if (!resource || resource.status !== "active") {
      throw new AppError(404, "Recurso no encontrado");
    }

    return toResourceResponse(resource);
  }

  public async create(
    data: CreateResourceDto
  ): Promise<ResourceResponseDto> {
    const method = data.method.trim().toUpperCase();
    const path = data.path.trim();

    const existing = await this.repository.findByMethodAndPath(
      method,
      path
    );

    if (existing) {
      throw new AppError(
        409,
        "Ya existe un recurso con ese método y path"
      );
    }

    const resource = await this.repository.create({
      method,
      path,
      description: data.description ?? null,
      status: data.status ?? "active",
    });

    return toResourceResponse(resource);
  }

  public async updatePut(
    id: number,
    data: UpdateResourceDto
  ): Promise<ResourceResponseDto> {
    const resource = await this.repository.findById(id);

    if (!resource) {
      throw new AppError(404, "Recurso no encontrado");
    }

    const method = data.method.trim().toUpperCase();
    const path = data.path.trim();

    const existing = await this.repository.findByMethodAndPath(
      method,
      path
    );

    if (existing && existing.id !== id) {
      throw new AppError(
        409,
        "Ya existe un recurso con ese método y path"
      );
    }

    await this.repository.update(resource, {
      method,
      path,
      description: data.description ?? null,
    });

    return toResourceResponse(resource);
  }

  public async updatePatch(
    id: number,
    data: PatchResourceDto
  ): Promise<ResourceResponseDto> {
    const resource = await this.repository.findById(id);

    if (!resource) {
      throw new AppError(404, "Recurso no encontrado");
    }

    const nextMethod = data.method
      ? data.method.trim().toUpperCase()
      : resource.method;

    const nextPath = data.path
      ? data.path.trim()
      : resource.path;

    const existing = await this.repository.findByMethodAndPath(
      nextMethod,
      nextPath
    );

    if (existing && existing.id !== id) {
      throw new AppError(
        409,
        "Ya existe un recurso con ese método y path"
      );
    }

    await this.repository.update(resource, {
      ...(data.method !== undefined ? { method: nextMethod } : {}),
      ...(data.path !== undefined ? { path: nextPath } : {}),
      ...(data.description !== undefined
        ? { description: data.description }
        : {}),
    });

    return toResourceResponse(resource);
  }

  public async deletePhysical(id: number): Promise<void> {
    const resource = await this.repository.findById(id);

    if (!resource) {
      throw new AppError(404, "Recurso no encontrado");
    }

    await this.repository.delete(resource);
  }

  public async deleteLogical(id: number): Promise<ResourceResponseDto> {
    const resource = await this.repository.findById(id);

    if (!resource) {
      throw new AppError(404, "Recurso no encontrado");
    }

    await this.repository.update(resource, {
      status: "inactive",
    });

    return toResourceResponse(resource);
  }
}
