import { ApiProperty } from '@nestjs/swagger';

export class InventoryResponseDto {
  @ApiProperty({ example: 1 })
  id: number;

  @ApiProperty({ example: 1 })
  ubicacion_id: number;

  @ApiProperty({ example: 1 })
  item_id: number;

  @ApiProperty({ example: 50 })
  cantidad: number;

  @ApiProperty({ example: 10 })
  stock_minimo: number;

  @ApiProperty()
  updated_at: Date;
}
