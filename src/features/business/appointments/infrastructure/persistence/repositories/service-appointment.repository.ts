import { Injectable } from '@nestjs/common';
import { Op } from 'sequelize';
import {
  buildPaginatedResult,
  normalizePagination,
} from '../../../../../../common/utils/pagination.util';
import { ServiceAppointment } from '../../../domain/entities/service-appointment.entity';
import {
  ServiceAppointmentFindAllParams,
  IServiceAppointmentRepository,
} from '../../../domain/interfaces/service-appointment-repository.interface';
import { ServiceAppointmentMapper } from '../../../application/mappers/service-appointment.mapper';
import { ServiceAppointmentModel } from '../models/service-appointment.model';

@Injectable()
export class ServiceAppointmentRepository
  implements IServiceAppointmentRepository
{
  async create(
    appointment: ServiceAppointment,
  ): Promise<ServiceAppointment> {
    const model = await ServiceAppointmentModel.create(
      ServiceAppointmentMapper.toPersistence(appointment),
    );

    return ServiceAppointmentMapper.toDomain(model);
  }

  async update(
    appointment: ServiceAppointment,
  ): Promise<ServiceAppointment> {
    await ServiceAppointmentModel.update(
      ServiceAppointmentMapper.toPersistence(appointment),
      {
        where: { id: appointment.id },
      },
    );

    const updated = await ServiceAppointmentModel.findByPk(
      appointment.id!,
    );

    return ServiceAppointmentMapper.toDomain(updated!);
  }

  async delete(id: number): Promise<void> {
    await ServiceAppointmentModel.destroy({ where: { id } });
  }

  async findById(id: number): Promise<ServiceAppointment | null> {
    const model = await ServiceAppointmentModel.findByPk(id);

    return model
      ? ServiceAppointmentMapper.toDomain(model)
      : null;
  }

  async findAll(params: ServiceAppointmentFindAllParams) {
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

    const { rows, count } =
      await ServiceAppointmentModel.findAndCountAll({
        where,
        limit,
        offset,
        order: [['createdAt', 'DESC']],
      });

    return buildPaginatedResult(
      rows.map((row) =>
        ServiceAppointmentMapper.toDomain(row),
      ),
      count,
      page,
      limit,
    );
  }
}
