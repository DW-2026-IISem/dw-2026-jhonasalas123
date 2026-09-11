import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import {
  IsInt,
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsPositive,
  IsString,
  MaxLength,
  Min,
} from 'class-validator';

export class CreateProductDto {
  @ApiProperty({ example: 'Concentrado para perros adultos' })
  @IsString()
  @IsNotEmpty()
  @MaxLength(150)
  name: string;

  @ApiProperty({ example: 'DogChow' })
  @IsString()
  @IsNotEmpty()
  @MaxLength(100)
  brand: string;

  @ApiProperty({ example: 59999 })
  @IsNumber()
  @IsPositive()
  price: number;

  @ApiProperty({ example: 5, default: 0 })
  @IsInt()
  @Min(0)
  minStock: number;

  @ApiProperty({ example: 50, default: 0 })
  @IsInt()
  @Min(0)
  quantity: number;

  @ApiProperty({ example: 1 })
  @IsInt()
  @IsPositive()
  productTypeId: number;
}
