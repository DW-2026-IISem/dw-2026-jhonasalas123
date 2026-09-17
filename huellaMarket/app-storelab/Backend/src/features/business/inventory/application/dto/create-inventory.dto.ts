import { ApiProperty } from '@nestjs/swagger';
import {
  IsInt,
  IsNotEmpty,
  IsPositive,
  Min,
} from 'class-validator';

export class CreateInventoryDto {
  @ApiProperty({ example: 1 })
  @IsInt()
  @IsPositive()
  @IsNotEmpty()
  ubicacion_id: number;

  @ApiProperty({ example: 1 })
  @IsInt()
  @IsPositive()
  @IsNotEmpty()
  item_id: number;

  @ApiProperty({ example: 50 })
  @IsInt()
  @Min(0)
  cantidad: number;

  @ApiProperty({ example: 10 })
  @IsInt()
  @Min(0)
  stock_minimo: number;
}
