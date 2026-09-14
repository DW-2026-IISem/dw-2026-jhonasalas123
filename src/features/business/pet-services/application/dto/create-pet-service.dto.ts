import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import {
  IsNotEmpty,
  IsOptional,
  IsString,
  MaxLength,
} from 'class-validator';

export class CreatePetServiceDto {
  @ApiProperty({ example: 'Vacunación' })
  @IsString()
  @IsNotEmpty()
  @MaxLength(150)
  nombre: string;

  @ApiPropertyOptional({
    example: 'Servicio de aplicación y registro de vacunas para mascotas',
  })
  @IsOptional()
  @IsString()
  @MaxLength(1000)
  descripcion?: string;
}
