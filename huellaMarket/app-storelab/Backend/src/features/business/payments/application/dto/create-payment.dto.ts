import { ApiProperty } from '@nestjs/swagger';
import {
  IsDateString,
  IsInt,
  IsNotEmpty,
  IsNumber,
  IsPositive,
  IsString,
} from 'class-validator';

export class CreatePaymentDto {
  @ApiProperty({ example: 'venta' })
  @IsString()
  @IsNotEmpty()
  referencia_tipo: string;

  @ApiProperty({ example: 1 })
  @IsInt()
  @IsPositive()
  @IsNotEmpty()
  referencia_id: number;

  @ApiProperty({ example: 'tarjeta' })
  @IsString()
  @IsNotEmpty()
  metodo: string;

  @ApiProperty({ example: 119000 })
  @IsNumber()
  @IsPositive()
  monto: number;

  @ApiProperty({ example: '2026-09-16T10:30:00.000Z' })
  @IsDateString()
  fecha: string;

  @ApiProperty({ example: 'aprobado' })
  @IsString()
  @IsNotEmpty()
  estado: string;
}
