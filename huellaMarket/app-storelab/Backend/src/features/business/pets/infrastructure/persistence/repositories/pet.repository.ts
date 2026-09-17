import { Injectable } from '@nestjs/common';
import { Op } from 'sequelize';
import {
  buildPaginatedResult,
  normalizePagination,
} from '../../../../../../common/utils/pagination.util';
import { Pet } from '../../../domain/entities/pet.entity';
import {
  PetFindAllParams,
  IPetRepository,
} from '../../../domain/interfaces/pet-repository.interface';
import { PetMapper } from '../../../application/mappers/pet.mapper';
import { PetModel } from '../models/pet.model';

@Injectable()
export class PetRepository implements IPetRepository {
  async create(pet: Pet): Promise<Pet> {
    const model = await PetModel.create(PetMapper.toPersistence(pet));
    return PetMapper.toDomain(model);
  }

  async update(pet: Pet): Promise<Pet> {
    await PetModel.update(PetMapper.toPersistence(pet), {
      where: { id: pet.id },
    });

    const updated = await PetModel.findByPk(pet.id!);
    return PetMapper.toDomain(updated!);
  }

  async delete(id: number): Promise<void> {
    await PetModel.destroy({ where: { id } });
  }

  async findById(id: number): Promise<Pet | null> {
    const model = await PetModel.findByPk(id);
    return model ? PetMapper.toDomain(model) : null;
  }

  async findAll(params: PetFindAllParams) {
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

    const { rows, count } = await PetModel.findAndCountAll({
      where,
      limit,
      offset,
      order: [['createdAt', 'DESC']],
    });

    return buildPaginatedResult(
      rows.map((row) => PetMapper.toDomain(row)),
      count,
      page,
      limit,
    );
  }
}
