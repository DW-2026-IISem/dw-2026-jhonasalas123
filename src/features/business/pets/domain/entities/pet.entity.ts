export interface PetProps {
  id?: number;
  nombre: string;
  descripcion?: string;
  isActive?: boolean;
  createdAt?: Date;
  updatedAt?: Date;
}

export class Pet {
  id?: number;
  nombre: string;
  descripcion?: string;
  isActive: boolean;
  createdAt?: Date;
  updatedAt?: Date;

  private constructor(props: PetProps) {
    this.id = props.id;
    this.nombre = props.nombre;
    this.descripcion = props.descripcion;
    this.isActive = props.isActive ?? true;
    this.createdAt = props.createdAt;
    this.updatedAt = props.updatedAt;
  }

  static create(
    props: Omit<PetProps, 'id' | 'isActive' | 'createdAt' | 'updatedAt'>,
  ): Pet {
    if (!props.nombre?.trim()) {
      throw new Error('El nombre de la mascota es requerido');
    }

    return new Pet(props);
  }

  static reconstitute(props: PetProps): Pet {
    return new Pet(props);
  }

  update(
    props: Partial<
      Omit<PetProps, 'id' | 'isActive' | 'createdAt' | 'updatedAt'>
    >,
  ): void {
    if (props.nombre !== undefined) {
      if (!props.nombre.trim()) {
        throw new Error('El nombre de la mascota es requerido');
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
