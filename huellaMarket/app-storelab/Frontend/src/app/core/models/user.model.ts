import type { Status } from './api.model';

export interface User {
  id: number;
  username: string;
  email: string;
  avatar: string | null;
  status: Status;
  createdAt?: string;
  updatedAt?: string;
}

export interface UserCreate {
  username: string;
  email: string;
  password: string;
  avatar?: string | null;
  status?: Status;
}

export interface UserUpdate {
  username: string;
  email: string;
  avatar?: string | null;
}

export interface UserPatch {
  username?: string;
  email?: string;
  avatar?: string | null;
}

export interface UserResponse {
  user: User;
}

export interface UsersResponse {
  users: User[];
}
