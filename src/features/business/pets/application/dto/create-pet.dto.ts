import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import {
  IsNotEmpty,
  IsOptional,
  IsString,
  MaxLength,
} from 'class-validator';

export class CreatePetDto {
  @ApiProperty({ example: 'Max' })
  @IsString()
  @IsNotEmpty()
  @MaxLength(100)
  nombre: string;

  @ApiPropertyOptional({ example: 'Perro de compañía' })
  @IsOptional()
  @IsString()
  @MaxLength(1000)
  descripcion?: string;
}
