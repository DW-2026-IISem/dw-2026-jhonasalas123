import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  HttpStatus,
  Param,
  Patch,
  Post,
  Query,
} from '@nestjs/common';
import {
  ApiCreatedResponse,
  ApiNoContentResponse,
  ApiOkResponse,
  ApiOperation,
  ApiTags,
} from '@nestjs/swagger';
import { ParsePositiveIntPipe } from '../../../../../../common/pipes/parse-positive-int.pipe';
import { CreatePetServiceDto } from '../../../application/dto/create-pet-service.dto';
import { UpdatePetServiceDto } from '../../../application/dto/update-pet-service.dto';
import { PetServiceFilterDto } from '../../../application/dto/pet-service-filter.dto';
import { PetServiceResponseDto } from '../../../application/dto/pet-service-response.dto';
import { CreatePetServiceUseCase } from '../../../application/use-cases/create-pet-service.use-case';
import { UpdatePetServiceUseCase } from '../../../application/use-cases/update-pet-service.use-case';
import { DeletePetServiceUseCase } from '../../../application/use-cases/delete-pet-service.use-case';
import { GetPetServiceUseCase } from '../../../application/use-cases/get-pet-service.use-case';
import { ListPetServicesUseCase } from '../../../application/use-cases/list-pet-services.use-case';

@ApiTags('Pet Services')
@Controller('pet-services')
export class PetServicesController {
  constructor(
    private readonly createPetServiceUseCase: CreatePetServiceUseCase,
    private readonly updatePetServiceUseCase: UpdatePetServiceUseCase,
    private readonly deletePetServiceUseCase: DeletePetServiceUseCase,
    private readonly getPetServiceUseCase: GetPetServiceUseCase,
    private readonly listPetServicesUseCase: ListPetServicesUseCase,
  ) {}

  @Post()
  @ApiOperation({ summary: 'Crear un servicio para mascota' })
  @ApiCreatedResponse({ type: PetServiceResponseDto })
  create(@Body() dto: CreatePetServiceDto) {
    return this.createPetServiceUseCase.execute(dto);
  }

  @Get()
  @ApiOperation({ summary: 'Listar servicios para mascotas' })
  @ApiOkResponse({ type: [PetServiceResponseDto] })
  findAll(@Query() filter: PetServiceFilterDto) {
    return this.listPetServicesUseCase.execute(filter);
  }

  @Get(':id')
  @ApiOperation({ summary: 'Obtener un servicio para mascota por ID' })
  @ApiOkResponse({ type: PetServiceResponseDto })
  findOne(@Param('id', ParsePositiveIntPipe) id: number) {
    return this.getPetServiceUseCase.execute(id);
  }

  @Patch(':id')
  @ApiOperation({ summary: 'Actualizar un servicio para mascota' })
  @ApiOkResponse({ type: PetServiceResponseDto })
  update(
    @Param('id', ParsePositiveIntPipe) id: number,
    @Body() dto: UpdatePetServiceDto,
  ) {
    return this.updatePetServiceUseCase.execute(id, dto);
  }

  @Delete(':id')
  @HttpCode(HttpStatus.NO_CONTENT)
  @ApiOperation({ summary: 'Eliminar un servicio para mascota' })
  @ApiNoContentResponse()
  remove(@Param('id', ParsePositiveIntPipe) id: number) {
    return this.deletePetServiceUseCase.execute(id);
  }
}
