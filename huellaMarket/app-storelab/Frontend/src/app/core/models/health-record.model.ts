export interface HealthRecord {
  id: number;
  nombre: string;
  descripcion: string | null;
  is_active: boolean;
  created_at?: string;
  updated_at?: string;
}

export interface HealthRecordResponse {
  health_record: HealthRecord;
}

export interface HealthRecordsResponse {
  health_records: HealthRecord[];
}
