export interface SaleDetailProps {
  id?: number;
  cabecera_id: number;
  item_id: number;
  cantidad: number;
  valor_unitario: number;
  total: number;
  observaciones?: string;
  createdAt?: Date;
  updatedAt?: Date;
}

export class SaleDetail {
  id?: number;
  cabecera_id: number;
  item_id: number;
  cantidad: number;
  valor_unitario: number;
  total: number;
  observaciones?: string;
  createdAt?: Date;
  updatedAt?: Date;

  private constructor(props: SaleDetailProps) {
    this.id = props.id;
    this.cabecera_id = props.cabecera_id;
    this.item_id = props.item_id;
    this.cantidad = props.cantidad;
    this.valor_unitario = props.valor_unitario;
    this.total = props.total;
    this.observaciones = props.observaciones;
    this.createdAt = props.createdAt;
    this.updatedAt = props.updatedAt;
  }

  static create(
    props: Omit<SaleDetailProps, 'id' | 'createdAt' | 'updatedAt'>,
  ): SaleDetail {
    if (props.cabecera_id <= 0) {
      throw new Error('La venta asociada es requerida');
    }

    if (props.item_id <= 0) {
      throw new Error('El producto asociado es requerido');
    }

    if (props.cantidad <= 0) {
      throw new Error('La cantidad debe ser mayor que cero');
    }

    if (props.valor_unitario < 0 || props.total < 0) {
      throw new Error('Los valores no pueden ser negativos');
    }

    return new SaleDetail(props);
  }

  static reconstitute(props: SaleDetailProps): SaleDetail {
    return new SaleDetail(props);
  }

  update(
    props: Partial<
      Omit<SaleDetailProps, 'id' | 'createdAt' | 'updatedAt'>
    >,
  ): void {
    if (props.cantidad !== undefined && props.cantidad <= 0) {
      throw new Error('La cantidad debe ser mayor que cero');
    }

    if (props.valor_unitario !== undefined && props.valor_unitario < 0) {
      throw new Error('El valor unitario no puede ser negativo');
    }

    if (props.total !== undefined && props.total < 0) {
      throw new Error('El total no puede ser negativo');
    }

    Object.assign(this, props);
    this.updatedAt = new Date();
  }
}
