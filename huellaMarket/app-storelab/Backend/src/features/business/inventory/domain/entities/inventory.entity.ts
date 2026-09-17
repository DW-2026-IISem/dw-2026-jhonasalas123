export interface InventoryProps {
  id?: number;
  ubicacion_id: number;
  item_id: number;
  cantidad: number;
  stock_minimo: number;
  updated_at?: Date;
}

export class Inventory {
  id?: number;
  ubicacion_id: number;
  item_id: number;
  cantidad: number;
  stock_minimo: number;
  updated_at?: Date;

  private constructor(props: InventoryProps) {
    this.id = props.id;
    this.ubicacion_id = props.ubicacion_id;
    this.item_id = props.item_id;
    this.cantidad = props.cantidad;
    this.stock_minimo = props.stock_minimo;
    this.updated_at = props.updated_at;
  }

  static create(
    props: Omit<InventoryProps, 'id' | 'updated_at'>,
  ): Inventory {
    if (props.ubicacion_id <= 0) {
      throw new Error('La ubicación del inventario es requerida');
    }

    if (props.item_id <= 0) {
      throw new Error('El item del inventario es requerido');
    }

    if (props.cantidad < 0) {
      throw new Error('La cantidad no puede ser negativa');
    }

    if (props.stock_minimo < 0) {
      throw new Error('El stock mínimo no puede ser negativo');
    }

    return new Inventory(props);
  }

  static reconstitute(props: InventoryProps): Inventory {
    return new Inventory(props);
  }

  update(
    props: Partial<
      Omit<InventoryProps, 'id' | 'updated_at'>
    >,
  ): void {
    if (props.ubicacion_id !== undefined) {
      if (props.ubicacion_id <= 0) {
        throw new Error('La ubicación del inventario es requerida');
      }
      this.ubicacion_id = props.ubicacion_id;
    }

    if (props.item_id !== undefined) {
      if (props.item_id <= 0) {
        throw new Error('El item del inventario es requerido');
      }
      this.item_id = props.item_id;
    }

    if (props.cantidad !== undefined) {
      if (props.cantidad < 0) {
        throw new Error('La cantidad no puede ser negativa');
      }
      this.cantidad = props.cantidad;
    }

    if (props.stock_minimo !== undefined) {
      if (props.stock_minimo < 0) {
        throw new Error('El stock mínimo no puede ser negativo');
      }
      this.stock_minimo = props.stock_minimo;
    }

    this.updated_at = new Date();
  }
}
