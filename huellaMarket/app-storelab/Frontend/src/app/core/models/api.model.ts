export type Status = 'active' | 'inactive';

export type Money = number | string;

export interface ApiError {
  error: string;
  detail?: string;
}

export interface Timestamps {
  createdAt?: Date | string;
  updatedAt?: Date | string;
}

export function toNumber(value: Money): number {
  return typeof value === 'number' ? value : Number(value);
}
