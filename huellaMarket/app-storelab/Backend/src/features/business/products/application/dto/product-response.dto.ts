import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';

export class ProductResponseDto {
  @ApiProperty({ example: 1 })
  id: number;

  @ApiProperty({ example: 'ALI-PERRO-001' })
  sku: string;

  @ApiProperty({ example: 'Alimento para perro' })
  nombre: string;

  @ApiPropertyOptional({
    example: 'Alimento balanceado para perros adultos',
  })
  descripcion?: string;

  @ApiProperty({ example: 85000 })
  precio: number;

  @ApiProperty({ example: true })
  isActive: boolean;

  @ApiProperty()
  createdAt: Date;

  @ApiProperty()
  updatedAt: Date;
}
