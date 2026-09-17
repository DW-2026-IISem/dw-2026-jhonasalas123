export interface ServiceAppointmentProps {
  id?: number;
  nombre: string;
  descripcion?: string;
  isActive?: boolean;
  createdAt?: Date;
  updatedAt?: Date;
}

export class ServiceAppointment {
  id?: number;
  nombre: string;
  descripcion?: string;
  isActive: boolean;
  createdAt?: Date;
  updatedAt?: Date;

  private constructor(props: ServiceAppointmentProps) {
    this.id = props.id;
    this.nombre = props.nombre;
    this.descripcion = props.descripcion;
    this.isActive = props.isActive ?? true;
    this.createdAt = props.createdAt;
    this.updatedAt = props.updatedAt;
  }

  static create(
    props: Omit<
      ServiceAppointmentProps,
      'id' | 'isActive' | 'createdAt' | 'updatedAt'
    >,
  ): ServiceAppointment {
    if (!props.nombre?.trim()) {
      throw new Error('El nombre de la cita de servicio es requerido');
    }

    return new ServiceAppointment(props);
  }

  static reconstitute(
    props: ServiceAppointmentProps,
  ): ServiceAppointment {
    return new ServiceAppointment(props);
  }

  update(
    props: Partial<
      Omit<
        ServiceAppointmentProps,
        'id' | 'isActive' | 'createdAt' | 'updatedAt'
      >
    >,
  ): void {
    if (props.nombre !== undefined) {
      if (!props.nombre.trim()) {
        throw new Error('El nombre de la cita de servicio es requerido');
      }

      this.nombre = props.nombre;
    }

    if (props.descripcion !== undefined) {
      this.descripcion = props.descripcion;
    }
  }

  deactivate(): void {
    this.isActive = false;
  }

  activate(): void {
    this.isActive = true;
  }
}
