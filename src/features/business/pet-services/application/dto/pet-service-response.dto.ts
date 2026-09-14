import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';

export class PetServiceResponseDto {
  @ApiProperty({ example: 1 })
  id: number;

  @ApiProperty({ example: 'Vacunación' })
  nombre: string;

  @ApiPropertyOptional({
    example: 'Servicio de aplicación y registro de vacunas para mascotas',
  })
  descripcion?: string;

  @ApiProperty({ example: true })
  isActive: boolean;

  @ApiProperty()
  createdAt: Date;

  @ApiProperty()
  updatedAt: Date;
}
