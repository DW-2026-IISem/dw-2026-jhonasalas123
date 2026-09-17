import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import {
  IsInt,
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsPositive,
  IsString,
  Min,
} from 'class-validator';

export class CreateSaleDetailDto {
  @ApiProperty({ example: 1 })
  @IsInt()
  @IsPositive()
  @IsNotEmpty()
  cabecera_id: number;

  @ApiProperty({ example: 1 })
  @IsInt()
  @IsPositive()
  @IsNotEmpty()
  item_id: number;

  @ApiProperty({ example: 2 })
  @IsInt()
  @IsPositive()
  cantidad: number;

  @ApiProperty({ example: 25000 })
  @IsNumber()
  @Min(0)
  valor_unitario: number;

  @ApiProperty({ example: 50000 })
  @IsNumber()
  @Min(0)
  total: number;

  @ApiPropertyOptional({ example: 'Alimento para perro adulto' })
  @IsOptional()
  @IsString()
  observaciones?: string;
}
