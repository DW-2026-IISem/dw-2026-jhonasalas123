import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';

export class ProviderResponseDto {
  @ApiProperty({ example: 1 })
  id: number;

  @ApiProperty({ example: '900123456-1' })
  nit: string;

  @ApiProperty({ example: 'Distribuciones Mascotas S.A.S.' })
  razon_social: string;

  @ApiPropertyOptional({ example: 'Carlos Rodríguez' })
  contacto?: string;

  @ApiPropertyOptional({ example: '+57 300 4567890' })
  telefono?: string;

  @ApiPropertyOptional({ example: 'contacto@distribucionesmascotas.com' })
  email?: string;

  @ApiProperty({ example: true })
  is_active: boolean;

  @ApiProperty()
  createdAt: Date;

  @ApiProperty()
  updatedAt: Date;
}
