export interface PetService {
  id: number;
  nombre: string;
  descripcion: string | null;
  isActive: boolean;
  createdAt?: string;
  updatedAt?: string;
}

export interface PetServiceResponse {
  pet_service: PetService;
}

export interface PetServicesResponse {
  pet_services: PetService[];
}
