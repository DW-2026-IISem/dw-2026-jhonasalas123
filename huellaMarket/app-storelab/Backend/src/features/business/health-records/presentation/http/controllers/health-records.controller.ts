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
import { CreateHealthRecordDto } from '../../../application/dto/create-health-record.dto';
import { UpdateHealthRecordDto } from '../../../application/dto/update-health-record.dto';
import { HealthRecordFilterDto } from '../../../application/dto/health-record-filter.dto';
import { HealthRecordResponseDto } from '../../../application/dto/health-record-response.dto';
import { CreateHealthRecordUseCase } from '../../../application/use-cases/create-health-record.use-case';
import { UpdateHealthRecordUseCase } from '../../../application/use-cases/update-health-record.use-case';
import { DeleteHealthRecordUseCase } from '../../../application/use-cases/delete-health-record.use-case';
import { GetHealthRecordUseCase } from '../../../application/use-cases/get-health-record.use-case';
import { ListHealthRecordsUseCase } from '../../../application/use-cases/list-health-records.use-case';

@ApiTags('Health Records')
@Controller('health-records')
export class HealthRecordsController {
  constructor(
    private readonly createHealthRecordUseCase: CreateHealthRecordUseCase,
    private readonly updateHealthRecordUseCase: UpdateHealthRecordUseCase,
    private readonly deleteHealthRecordUseCase: DeleteHealthRecordUseCase,
    private readonly getHealthRecordUseCase: GetHealthRecordUseCase,
    private readonly listHealthRecordsUseCase: ListHealthRecordsUseCase,
  ) {}

  @Post()
  @ApiOperation({ summary: 'Crear una ficha sanitaria' })
  @ApiCreatedResponse({ type: HealthRecordResponseDto })
  create(@Body() dto: CreateHealthRecordDto) {
    return this.createHealthRecordUseCase.execute(dto);
  }

  @Get()
  @ApiOperation({ summary: 'Listar fichas sanitarias' })
  @ApiOkResponse({ type: [HealthRecordResponseDto] })
  findAll(@Query() filter: HealthRecordFilterDto) {
    return this.listHealthRecordsUseCase.execute(filter);
  }

  @Get(':id')
  @ApiOperation({ summary: 'Obtener una ficha sanitaria por ID' })
  @ApiOkResponse({ type: HealthRecordResponseDto })
  findOne(@Param('id', ParsePositiveIntPipe) id: number) {
    return this.getHealthRecordUseCase.execute(id);
  }

  @Patch(':id')
  @ApiOperation({ summary: 'Actualizar una ficha sanitaria' })
  @ApiOkResponse({ type: HealthRecordResponseDto })
  update(
    @Param('id', ParsePositiveIntPipe) id: number,
    @Body() dto: UpdateHealthRecordDto,
  ) {
    return this.updateHealthRecordUseCase.execute(id, dto);
  }

  @Delete(':id')
  @HttpCode(HttpStatus.NO_CONTENT)
  @ApiOperation({ summary: 'Eliminar una ficha sanitaria' })
  @ApiNoContentResponse()
  remove(@Param('id', ParsePositiveIntPipe) id: number) {
    return this.deleteHealthRecordUseCase.execute(id);
  }
}
