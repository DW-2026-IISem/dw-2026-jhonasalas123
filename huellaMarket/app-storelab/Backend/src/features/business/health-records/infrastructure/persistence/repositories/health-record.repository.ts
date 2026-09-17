import { Injectable } from '@nestjs/common';
import { Op } from 'sequelize';
import {
  buildPaginatedResult,
  normalizePagination,
} from '../../../../../../common/utils/pagination.util';
import { HealthRecord } from '../../../domain/entities/health-record.entity';
import {
  HealthRecordFindAllParams,
  IHealthRecordRepository,
} from '../../../domain/interfaces/health-record-repository.interface';
import { HealthRecordMapper } from '../../../application/mappers/health-record.mapper';
import { HealthRecordModel } from '../models/health-record.model';

@Injectable()
export class HealthRecordRepository implements IHealthRecordRepository {
  async create(healthRecord: HealthRecord): Promise<HealthRecord> {
    const model = await HealthRecordModel.create(
      HealthRecordMapper.toPersistence(healthRecord),
    );

    return HealthRecordMapper.toDomain(model);
  }

  async update(healthRecord: HealthRecord): Promise<HealthRecord> {
    await HealthRecordModel.update(
      HealthRecordMapper.toPersistence(healthRecord),
      {
        where: { id: healthRecord.id },
      },
    );

    const updated = await HealthRecordModel.findByPk(healthRecord.id!);
    return HealthRecordMapper.toDomain(updated!);
  }

  async delete(id: number): Promise<void> {
    await HealthRecordModel.destroy({ where: { id } });
  }

  async findById(id: number): Promise<HealthRecord | null> {
    const model = await HealthRecordModel.findByPk(id);

    return model ? HealthRecordMapper.toDomain(model) : null;
  }

  async findAll(params: HealthRecordFindAllParams) {
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

    const { rows, count } = await HealthRecordModel.findAndCountAll({
      where,
      limit,
      offset,
      order: [['createdAt', 'DESC']],
    });

    return buildPaginatedResult(
      rows.map((row) => HealthRecordMapper.toDomain(row)),
      count,
      page,
      limit,
    );
  }
}
