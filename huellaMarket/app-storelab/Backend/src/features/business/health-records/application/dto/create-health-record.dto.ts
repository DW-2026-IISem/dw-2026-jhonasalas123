import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import {
  IsNotEmpty,
  IsOptional,
  IsString,
  MaxLength,
} from 'class-validator';

export class CreateHealthRecordDto {
  @ApiProperty({ example: 'Ficha sanitaria básica' })
  @IsString()
  @IsNotEmpty()
  @MaxLength(150)
  nombre: string;

  @ApiPropertyOptional({
    example: 'Registro sanitario general de la mascota',
  })
  @IsOptional()
  @IsString()
  @MaxLength(1000)
  descripcion?: string;
}
