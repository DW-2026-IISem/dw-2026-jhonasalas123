import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';

export class ServiceAppointmentResponseDto {
  @ApiProperty({ example: 1 })
  id: number;

  @ApiProperty({ example: 'Cita de vacunación' })
  nombre: string;

  @ApiPropertyOptional({
    example: 'Cita para aplicación y registro de vacunas de la mascota',
  })
  descripcion?: string;

  @ApiProperty({ example: true })
  isActive: boolean;

  @ApiProperty()
  createdAt: Date;

  @ApiProperty()
  updatedAt: Date;
}
