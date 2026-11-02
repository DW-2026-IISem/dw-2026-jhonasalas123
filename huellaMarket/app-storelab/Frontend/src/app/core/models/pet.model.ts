export interface Pet {
  id: number;
  nombre: string;
  descripcion: string | null;
  isActive: boolean;
  createdAt?: string;
  updatedAt?: string;
}

export interface PetResponse {
  pet: Pet;
}

export interface PetsResponse {
  pets: Pet[];
}

export interface PetPayload {
  nombre: string;
  descripcion?: string | null;
  isActive?: boolean;
}
