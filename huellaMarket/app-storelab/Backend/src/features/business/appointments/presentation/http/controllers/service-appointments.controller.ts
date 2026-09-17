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
import { CreateServiceAppointmentDto } from '../../../application/dto/create-service-appointment.dto';
import { UpdateServiceAppointmentDto } from '../../../application/dto/update-service-appointment.dto';
import { ServiceAppointmentFilterDto } from '../../../application/dto/service-appointment-filter.dto';
import { ServiceAppointmentResponseDto } from '../../../application/dto/service-appointment-response.dto';
import { CreateServiceAppointmentUseCase } from '../../../application/use-cases/create-service-appointment.use-case';
import { UpdateServiceAppointmentUseCase } from '../../../application/use-cases/update-service-appointment.use-case';
import { DeleteServiceAppointmentUseCase } from '../../../application/use-cases/delete-service-appointment.use-case';
import { GetServiceAppointmentUseCase } from '../../../application/use-cases/get-service-appointment.use-case';
import { ListServiceAppointmentsUseCase } from '../../../application/use-cases/list-service-appointments.use-case';

@ApiTags('Service Appointments')
@Controller('service-appointments')
export class ServiceAppointmentsController {
  constructor(
    private readonly createServiceAppointmentUseCase: CreateServiceAppointmentUseCase,
    private readonly updateServiceAppointmentUseCase: UpdateServiceAppointmentUseCase,
    private readonly deleteServiceAppointmentUseCase: DeleteServiceAppointmentUseCase,
    private readonly getServiceAppointmentUseCase: GetServiceAppointmentUseCase,
    private readonly listServiceAppointmentsUseCase: ListServiceAppointmentsUseCase,
  ) {}

  @Post()
  @ApiOperation({ summary: 'Crear una cita de servicio' })
  @ApiCreatedResponse({ type: ServiceAppointmentResponseDto })
  create(@Body() dto: CreateServiceAppointmentDto) {
    return this.createServiceAppointmentUseCase.execute(dto);
  }

  @Get()
  @ApiOperation({ summary: 'Listar citas de servicio' })
  @ApiOkResponse({ type: [ServiceAppointmentResponseDto] })
  findAll(@Query() filter: ServiceAppointmentFilterDto) {
    return this.listServiceAppointmentsUseCase.execute(filter);
  }

  @Get(':id')
  @ApiOperation({ summary: 'Obtener una cita de servicio por ID' })
  @ApiOkResponse({ type: ServiceAppointmentResponseDto })
  findOne(@Param('id', ParsePositiveIntPipe) id: number) {
    return this.getServiceAppointmentUseCase.execute(id);
  }

  @Patch(':id')
  @ApiOperation({ summary: 'Actualizar una cita de servicio' })
  @ApiOkResponse({ type: ServiceAppointmentResponseDto })
  update(
    @Param('id', ParsePositiveIntPipe) id: number,
    @Body() dto: UpdateServiceAppointmentDto,
  ) {
    return this.updateServiceAppointmentUseCase.execute(id, dto);
  }

  @Delete(':id')
  @HttpCode(HttpStatus.NO_CONTENT)
  @ApiOperation({ summary: 'Eliminar una cita de servicio' })
  @ApiNoContentResponse()
  remove(@Param('id', ParsePositiveIntPipe) id: number) {
    return this.deleteServiceAppointmentUseCase.execute(id);
  }
}
