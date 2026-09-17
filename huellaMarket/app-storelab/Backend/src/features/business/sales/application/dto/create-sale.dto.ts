import { ApiProperty } from '@nestjs/swagger';
import {
  IsDateString,
  IsInt,
  IsNotEmpty,
  IsNumber,
  IsString,
  IsPositive,
  Min,
} from 'class-validator';

export class CreateSaleDto {
  @ApiProperty({ example: 1 })
  @IsInt()
  @IsPositive()
  @IsNotEmpty()
  cliente_id: number;

  @ApiProperty({ example: '2026-09-16T10:30:00.000Z' })
  @IsDateString()
  fecha: string;

  @ApiProperty({ example: 100000 })
  @IsNumber()
  @Min(0)
  subtotal: number;

  @ApiProperty({ example: 19000 })
  @IsNumber()
  @Min(0)
  impuestos: number;

  @ApiProperty({ example: 119000 })
  @IsNumber()
  @Min(0)
  total: number;

  @ApiProperty({ example: 'pendiente' })
  @IsString()
  @IsNotEmpty()
  estado: string;
}
