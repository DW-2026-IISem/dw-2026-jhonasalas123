import { Provider } from '../../domain/entities/provider.entity';
import { ProviderResponseDto } from '../dto/provider-response.dto';
import { ProviderModel } from '../../infrastructure/persistence/models/provider.model';

export class ProviderMapper {
  static toDomain(model: ProviderModel): Provider {
    return Provider.reconstitute({
      id: model.id,
      nit: model.nit,
      razon_social: model.razon_social,
      contacto: model.contacto ?? undefined,
      telefono: model.telefono ?? undefined,
      email: model.email ?? undefined,
      is_active: model.is_active,
      createdAt: model.createdAt,
      updatedAt: model.updatedAt,
    });
  }

  static toResponse(entity: Provider): ProviderResponseDto {
    return {
      id: entity.id!,
      nit: entity.nit,
      razon_social: entity.razon_social,
      contacto: entity.contacto,
      telefono: entity.telefono,
      email: entity.email,
      is_active: entity.is_active,
      createdAt: entity.createdAt!,
      updatedAt: entity.updatedAt!,
    };
  }

  static toPersistence(entity: Provider): Partial<ProviderModel> {
    return {
      id: entity.id,
      nit: entity.nit,
      razon_social: entity.razon_social,
      contacto: entity.contacto ?? null,
      telefono: entity.telefono ?? null,
      email: entity.email ?? null,
      is_active: entity.is_active,
    };
  }
}
