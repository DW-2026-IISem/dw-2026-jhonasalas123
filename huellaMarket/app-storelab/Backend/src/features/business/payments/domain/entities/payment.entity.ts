export interface PaymentProps {
  id?: number;
  referencia_tipo: string;
  referencia_id: number;
  metodo: string;
  monto: number;
  fecha: Date;
  estado: string;
  createdAt?: Date;
  updatedAt?: Date;
}

export class Payment {
  id?: number;
  referencia_tipo: string;
  referencia_id: number;
  metodo: string;
  monto: number;
  fecha: Date;
  estado: string;
  createdAt?: Date;
  updatedAt?: Date;

  private constructor(props: PaymentProps) {
    this.id = props.id;
    this.referencia_tipo = props.referencia_tipo;
    this.referencia_id = props.referencia_id;
    this.metodo = props.metodo;
    this.monto = props.monto;
    this.fecha = props.fecha;
    this.estado = props.estado;
    this.createdAt = props.createdAt;
    this.updatedAt = props.updatedAt;
  }

  static create(
    props: Omit<PaymentProps, 'id' | 'createdAt' | 'updatedAt'>,
  ): Payment {
    if (!props.referencia_tipo?.trim()) {
      throw new Error('El tipo de referencia es requerido');
    }

    if (props.referencia_id <= 0) {
      throw new Error('La referencia es requerida');
    }

    if (!props.metodo?.trim()) {
      throw new Error('El método de pago es requerido');
    }

    if (props.monto <= 0) {
      throw new Error('El monto debe ser mayor que cero');
    }

    if (!props.estado?.trim()) {
      throw new Error('El estado del pago es requerido');
    }

    return new Payment(props);
  }

  static reconstitute(props: PaymentProps): Payment {
    return new Payment(props);
  }

  update(
    props: Partial<
      Omit<PaymentProps, 'id' | 'createdAt' | 'updatedAt'>
    >,
  ): void {
    if (props.referencia_tipo !== undefined) {
      this.referencia_tipo = props.referencia_tipo;
    }

    if (props.referencia_id !== undefined) {
      if (props.referencia_id <= 0) {
        throw new Error('La referencia es requerida');
      }
      this.referencia_id = props.referencia_id;
    }

    if (props.metodo !== undefined) {
      this.metodo = props.metodo;
    }

    if (props.monto !== undefined) {
      if (props.monto <= 0) {
        throw new Error('El monto debe ser mayor que cero');
      }
      this.monto = props.monto;
    }

    if (props.fecha !== undefined) {
      this.fecha = props.fecha;
    }

    if (props.estado !== undefined) {
      this.estado = props.estado;
    }

    this.updatedAt = new Date();
  }
}
