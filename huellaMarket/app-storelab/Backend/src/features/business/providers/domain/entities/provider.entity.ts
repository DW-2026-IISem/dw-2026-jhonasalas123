import { isValidEmail } from '../validators/provider-email.validator';
import { isValidPhone } from '../validators/provider-phone.validator';

export interface ProviderProps {
  id?: number;
  nit: string;
  razon_social: string;
  contacto?: string;
  telefono?: string;
  email?: string;
  is_active: boolean;
  createdAt?: Date;
  updatedAt?: Date;
}

export class Provider {
  id?: number;
  nit: string;
  razon_social: string;
  contacto?: string;
  telefono?: string;
  email?: string;
  is_active: boolean;
  createdAt?: Date;
  updatedAt?: Date;

  private constructor(props: ProviderProps) {
    this.id = props.id;
    this.nit = props.nit;
    this.razon_social = props.razon_social;
    this.contacto = props.contacto;
    this.telefono = props.telefono;
    this.email = props.email;
    this.is_active = props.is_active ?? true;
    this.createdAt = props.createdAt;
    this.updatedAt = props.updatedAt;
  }

  static create(
    props: Omit<ProviderProps, 'id' | 'createdAt' | 'updatedAt' | 'is_active'> & {
      is_active?: boolean;
    },
  ): Provider {
    if (!props.nit?.trim()) {
      throw new Error('El NIT del proveedor es requerido');
    }

    if (!props.razon_social?.trim()) {
      throw new Error('La razón social del proveedor es requerida');
    }

    if (props.email && !isValidEmail(props.email)) {
      throw new Error('El email del proveedor no es válido');
    }

    if (props.telefono && !isValidPhone(props.telefono)) {
      throw new Error('El teléfono del proveedor no es válido');
    }

    return new Provider({
      ...props,
      is_active: props.is_active ?? true,
    });
  }

  static reconstitute(props: ProviderProps): Provider {
    return new Provider(props);
  }

  update(
    props: Partial<
      Omit<ProviderProps, 'id' | 'createdAt' | 'updatedAt' | 'is_active'>
    > & {
      is_active?: boolean;
    },
  ): void {
    if (props.nit !== undefined) {
      if (!props.nit.trim()) {
        throw new Error('El NIT del proveedor es requerido');
      }
      this.nit = props.nit;
    }

    if (props.razon_social !== undefined) {
      if (!props.razon_social.trim()) {
        throw new Error('La razón social del proveedor es requerida');
      }
      this.razon_social = props.razon_social;
    }

    if (props.contacto !== undefined) {
      this.contacto = props.contacto;
    }

    if (props.telefono !== undefined) {
      if (props.telefono && !isValidPhone(props.telefono)) {
        throw new Error('El teléfono del proveedor no es válido');
      }
      this.telefono = props.telefono;
    }

    if (props.email !== undefined) {
      if (props.email && !isValidEmail(props.email)) {
        throw new Error('El email del proveedor no es válido');
      }
      this.email = props.email;
    }

    if (props.is_active !== undefined) {
      this.is_active = props.is_active;
    }
  }

  deactivate(): void {
    this.is_active = false;
  }
}
