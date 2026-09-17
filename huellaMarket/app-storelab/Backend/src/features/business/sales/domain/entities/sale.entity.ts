export interface SaleProps {
  id?: number;
  cliente_id: number;
  fecha: Date;
  subtotal: number;
  impuestos: number;
  total: number;
  estado: string;
  createdAt?: Date;
  updatedAt?: Date;
}

export class Sale {
  id?: number;
  cliente_id: number;
  fecha: Date;
  subtotal: number;
  impuestos: number;
  total: number;
  estado: string;
  createdAt?: Date;
  updatedAt?: Date;

  private constructor(props: SaleProps) {
    this.id = props.id;
    this.cliente_id = props.cliente_id;
    this.fecha = props.fecha;
    this.subtotal = props.subtotal;
    this.impuestos = props.impuestos;
    this.total = props.total;
    this.estado = props.estado;
    this.createdAt = props.createdAt;
    this.updatedAt = props.updatedAt;
  }

  static create(
    props: Omit<SaleProps, 'id' | 'createdAt' | 'updatedAt'>,
  ): Sale {
    if (props.cliente_id <= 0) {
      throw new Error('El cliente de la venta es requerido');
    }

    if (props.subtotal < 0 || props.impuestos < 0 || props.total < 0) {
      throw new Error('Los valores de la venta no pueden ser negativos');
    }

    if (!props.estado?.trim()) {
      throw new Error('El estado de la venta es requerido');
    }

    return new Sale(props);
  }

  static reconstitute(props: SaleProps): Sale {
    return new Sale(props);
  }

  update(
    props: Partial<
      Omit<SaleProps, 'id' | 'createdAt' | 'updatedAt'>
    >,
  ): void {
    if (props.cliente_id !== undefined) {
      this.cliente_id = props.cliente_id;
    }

    if (props.fecha !== undefined) {
      this.fecha = props.fecha;
    }

    if (props.subtotal !== undefined) {
      this.subtotal = props.subtotal;
    }

    if (props.impuestos !== undefined) {
      this.impuestos = props.impuestos;
    }

    if (props.total !== undefined) {
      this.total = props.total;
    }

    if (props.estado !== undefined) {
      this.estado = props.estado;
    }

    this.updatedAt = new Date();
  }
}
