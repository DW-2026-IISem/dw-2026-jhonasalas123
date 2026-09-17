import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';

export class HealthRecordResponseDto {
  @ApiProperty({ example: 1 })
  id: number;

  @ApiProperty({ example: 'Ficha sanitaria básica' })
  nombre: string;

  @ApiPropertyOptional({
    example: 'Registro sanitario general de la mascota',
  })
  descripcion?: string;

  @ApiProperty({ example: true })
  isActive: boolean;

  @ApiProperty()
  createdAt: Date;

  @ApiProperty()
  updatedAt: Date;
}
