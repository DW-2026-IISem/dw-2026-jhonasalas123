import { Inject, Injectable } from '@nestjs/common';
import { ClientNotFoundException } from '../../domain/exceptions/client-not-found.exception';
import {
  CLIENT_REPOSITORY,
  type IClientRepository,
} from '../../domain/interfaces/client-repository.interface';
import { UpdateClientDto } from '../dto/update-client.dto';
import { ClientMapper } from '../mappers/client.mapper';

@Injectable()
export class UpdateClientUseCase {
  constructor(
    @Inject(CLIENT_REPOSITORY)
    private readonly clientRepository: IClientRepository,
  ) {}

  async execute(id: number, dto: UpdateClientDto) {
    const client = await this.clientRepository.findById(id);

    if (!client) {
      throw new ClientNotFoundException(id);
    }

    if (
      dto.numeroDocumento &&
      dto.numeroDocumento !== client.numeroDocumento
    ) {
      const existing =
        await this.clientRepository.findByNumeroDocumento(
          dto.numeroDocumento,
        );

      if (existing) {
        throw new Error(
          `El cliente con número de documento ${dto.numeroDocumento} ya existe`,
        );
      }
    }

    client.update(dto);

    const updated = await this.clientRepository.update(client);

    return ClientMapper.toResponse(updated);
  }
}
