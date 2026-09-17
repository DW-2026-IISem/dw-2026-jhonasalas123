import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';

export class SaleDetailResponseDto {
  @ApiProperty({ example: 1 })
  id: number;

  @ApiProperty({ example: 1 })
  cabecera_id: number;

  @ApiProperty({ example: 1 })
  item_id: number;

  @ApiProperty({ example: 2 })
  cantidad: number;

  @ApiProperty({ example: 25000 })
  valor_unitario: number;

  @ApiProperty({ example: 50000 })
  total: number;

  @ApiPropertyOptional({ example: 'Alimento para perro adulto' })
  observaciones?: string;

  @ApiProperty()
  createdAt: Date;

  @ApiProperty()
  updatedAt: Date;
}
