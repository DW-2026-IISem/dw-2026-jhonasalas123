import { PartialType } from '@nestjs/mapped-types';
import { CreatePetServiceDto } from './create-pet-service.dto';

export class UpdatePetServiceDto extends PartialType(CreatePetServiceDto) {}
