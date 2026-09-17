export interface ProductProps {
  id?: number;
  sku: string;
  nombre: string;
  descripcion?: string;
  precio: number;
  isActive: boolean;
  createdAt?: Date;
  updatedAt?: Date;
}

export class Product {
  private constructor(
    private readonly props: ProductProps,
  ) {}

  static create(
    props: Omit<
      ProductProps,
      'id' | 'createdAt' | 'updatedAt' | 'isActive'
    > & {
      isActive?: boolean;
    },
  ): Product {
    return new Product({
      ...props,
      isActive: props.isActive ?? true,
    });
  }

  static reconstitute(props: ProductProps): Product {
    return new Product(props);
  }

  get id(): number | undefined {
    return this.props.id;
  }

  get sku(): string {
    return this.props.sku;
  }

  get nombre(): string {
    return this.props.nombre;
  }

  get descripcion(): string | undefined {
    return this.props.descripcion;
  }

  get precio(): number {
    return this.props.precio;
  }

  get isActive(): boolean {
    return this.props.isActive;
  }

  get createdAt(): Date | undefined {
    return this.props.createdAt;
  }

  get updatedAt(): Date | undefined {
    return this.props.updatedAt;
  }

  update(
    props: Partial<
      Omit<ProductProps, 'id' | 'createdAt' | 'updatedAt' | 'isActive'>
    > & {
      isActive?: boolean;
    },
  ): void {
    Object.assign(this.props, props);
  }
}
