import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import {
  IsNotEmpty,
  IsOptional,
  IsString,
  MaxLength,
} from 'class-validator';

export class CreateServiceAppointmentDto {
  @ApiProperty({ example: 'Cita de vacunación' })
  @IsString()
  @IsNotEmpty()
  @MaxLength(150)
  nombre: string;

  @ApiPropertyOptional({
    example: 'Cita para aplicación y registro de vacunas de la mascota',
  })
  @IsOptional()
  @IsString()
  @MaxLength(1000)
  descripcion?: string;
}
