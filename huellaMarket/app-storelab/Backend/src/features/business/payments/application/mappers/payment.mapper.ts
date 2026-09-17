import { Payment } from '../../domain/entities/payment.entity';
import { PaymentResponseDto } from '../dto/payment-response.dto';
import { PaymentModel } from '../../infrastructure/persistence/models/payment.model';

export class PaymentMapper {
  static toDomain(model: PaymentModel): Payment {
    return Payment.reconstitute({
      id: model.id,
      referencia_tipo: model.referencia_tipo,
      referencia_id: model.referencia_id,
      metodo: model.metodo,
      monto: Number(model.monto),
      fecha: model.fecha,
      estado: model.estado,
      createdAt: model.createdAt,
      updatedAt: model.updatedAt,
    });
  }

  static toResponse(entity: Payment): PaymentResponseDto {
    return {
      id: entity.id!,
      referencia_tipo: entity.referencia_tipo,
      referencia_id: entity.referencia_id,
      metodo: entity.metodo,
      monto: entity.monto,
      fecha: entity.fecha,
      estado: entity.estado,
      createdAt: entity.createdAt!,
      updatedAt: entity.updatedAt!,
    };
  }

  static toPersistence(entity: Payment): Partial<PaymentModel> {
    return {
      id: entity.id,
      referencia_tipo: entity.referencia_tipo,
      referencia_id: entity.referencia_id,
      metodo: entity.metodo,
      monto: entity.monto,
      fecha: entity.fecha,
      estado: entity.estado,
    };
  }
}
