import { ApiProperty } from '@nestjs/swagger';

export class SaleResponseDto {
  @ApiProperty({ example: 1 })
  id: number;

  @ApiProperty({ example: 1 })
  cliente_id: number;

  @ApiProperty({ example: '2026-09-16T10:30:00.000Z' })
  fecha: Date;

  @ApiProperty({ example: 100000 })
  subtotal: number;

  @ApiProperty({ example: 19000 })
  impuestos: number;

  @ApiProperty({ example: 119000 })
  total: number;

  @ApiProperty({ example: 'pendiente' })
  estado: string;

  @ApiProperty()
  createdAt: Date;

  @ApiProperty()
  updatedAt: Date;
}
