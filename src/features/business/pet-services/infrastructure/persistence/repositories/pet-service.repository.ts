import { Injectable } from '@nestjs/common';
import { Op } from 'sequelize';
import {
  buildPaginatedResult,
  normalizePagination,
} from '../../../../../../common/utils/pagination.util';
import { PetService } from '../../../domain/entities/pet-service.entity';
import {
  PetServiceFindAllParams,
  IPetServiceRepository,
} from '../../../domain/interfaces/pet-service-repository.interface';
import { PetServiceMapper } from '../../../application/mappers/pet-service.mapper';
import { PetServiceModel } from '../models/pet-service.model';

@Injectable()
export class PetServiceRepository implements IPetServiceRepository {
  async create(petService: PetService): Promise<PetService> {
    const model = await PetServiceModel.create(
      PetServiceMapper.toPersistence(petService),
    );

    return PetServiceMapper.toDomain(model);
  }

  async update(petService: PetService): Promise<PetService> {
    await PetServiceModel.update(
      PetServiceMapper.toPersistence(petService),
      {
        where: { id: petService.id },
      },
    );

    const updated = await PetServiceModel.findByPk(petService.id!);
    return PetServiceMapper.toDomain(updated!);
  }

  async delete(id: number): Promise<void> {
    await PetServiceModel.destroy({ where: { id } });
  }

  async findById(id: number): Promise<PetService | null> {
    const model = await PetServiceModel.findByPk(id);

    return model ? PetServiceMapper.toDomain(model) : null;
  }

  async findAll(params: PetServiceFindAllParams) {
    const { page, limit, offset } = normalizePagination(
      params.page,
      params.limit,
    );

    const where = params.search
      ? {
          [Op.or]: [
            { nombre: { [Op.like]: `%${params.search}%` } },
            { descripcion: { [Op.like]: `%${params.search}%` } },
          ],
        }
      : {};

    const { rows, count } = await PetServiceModel.findAndCountAll({
      where,
      limit,
      offset,
      order: [['createdAt', 'DESC']],
    });

    return buildPaginatedResult(
      rows.map((row) => PetServiceMapper.toDomain(row)),
      count,
      page,
      limit,
    );
  }
}
