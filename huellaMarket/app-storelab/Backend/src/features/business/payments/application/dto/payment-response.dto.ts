import { ApiProperty } from '@nestjs/swagger';

export class PaymentResponseDto {
  @ApiProperty({ example: 1 })
  id: number;

  @ApiProperty({ example: 'venta' })
  referencia_tipo: string;

  @ApiProperty({ example: 1 })
  referencia_id: number;

  @ApiProperty({ example: 'tarjeta' })
  metodo: string;

  @ApiProperty({ example: 119000 })
  monto: number;

  @ApiProperty({ example: '2026-09-16T10:30:00.000Z' })
  fecha: Date;

  @ApiProperty({ example: 'aprobado' })
  estado: string;

  @ApiProperty()
  createdAt: Date;

  @ApiProperty()
  updatedAt: Date;
}
