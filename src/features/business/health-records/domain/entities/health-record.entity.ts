export interface HealthRecordProps {
  id?: number;
  nombre: string;
  descripcion?: string;
  isActive?: boolean;
  createdAt?: Date;
  updatedAt?: Date;
}

export class HealthRecord {
  id?: number;
  nombre: string;
  descripcion?: string;
  isActive: boolean;
  createdAt?: Date;
  updatedAt?: Date;

  private constructor(props: HealthRecordProps) {
    this.id = props.id;
    this.nombre = props.nombre;
    this.descripcion = props.descripcion;
    this.isActive = props.isActive ?? true;
    this.createdAt = props.createdAt;
    this.updatedAt = props.updatedAt;
  }

  static create(
    props: Omit<
      HealthRecordProps,
      'id' | 'isActive' | 'createdAt' | 'updatedAt'
    >,
  ): HealthRecord {
    if (!props.nombre?.trim()) {
      throw new Error('El nombre de la ficha sanitaria es requerido');
    }

    return new HealthRecord(props);
  }

  static reconstitute(props: HealthRecordProps): HealthRecord {
    return new HealthRecord(props);
  }

  update(
    props: Partial<
      Omit<
        HealthRecordProps,
        'id' | 'isActive' | 'createdAt' | 'updatedAt'
      >
    >,
  ): void {
    if (props.nombre !== undefined) {
      if (!props.nombre.trim()) {
        throw new Error('El nombre de la ficha sanitaria es requerido');
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
