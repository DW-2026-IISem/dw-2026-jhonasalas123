import { Inject, Injectable } from '@nestjs/common';
import { Provider } from '../../domain/entities/provider.entity';
import {
  PROVIDER_REPOSITORY,
  type IProviderRepository,
} from '../../domain/interfaces/provider-repository.interface';
import { CreateProviderDto } from '../dto/create-provider.dto';
import { ProviderMapper } from '../mappers/provider.mapper';

@Injectable()
export class CreateProviderUseCase {
  constructor(
    @Inject(PROVIDER_REPOSITORY)
    private readonly providerRepository: IProviderRepository,
  ) {}

  async execute(dto: CreateProviderDto) {
    const existing = await this.providerRepository.findByNit(dto.nit);

    if (existing) {
      throw new Error(`Ya existe un proveedor con el NIT ${dto.nit}`);
    }

    const provider = Provider.create({
      nit: dto.nit,
      razon_social: dto.razon_social,
      contacto: dto.contacto,
      telefono: dto.telefono,
      email: dto.email,
    });

    const created = await this.providerRepository.create(provider);
    return ProviderMapper.toResponse(created);
  }
}
