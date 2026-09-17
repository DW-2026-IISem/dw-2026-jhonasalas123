import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import {
  IsEmail,
  IsNotEmpty,
  IsOptional,
  IsString,
  MaxLength,
} from 'class-validator';

export class CreateProviderDto {
  @ApiProperty({ example: '900123456-1' })
  @IsString()
  @IsNotEmpty()
  @MaxLength(50)
  nit: string;

  @ApiProperty({ example: 'Distribuciones Mascotas S.A.S.' })
  @IsString()
  @IsNotEmpty()
  @MaxLength(200)
  razon_social: string;

  @ApiPropertyOptional({ example: 'Carlos Rodríguez' })
  @IsOptional()
  @IsString()
  @MaxLength(150)
  contacto?: string;

  @ApiPropertyOptional({ example: '+57 300 4567890' })
  @IsOptional()
  @IsString()
  @MaxLength(30)
  telefono?: string;

  @ApiPropertyOptional({ example: 'contacto@distribucionesmascotas.com' })
  @IsOptional()
  @IsEmail()
  @MaxLength(150)
  email?: string;
}
