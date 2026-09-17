export const createHealthRecordsTableMigration = {
  name: 'create-health-records-table',

  async up(): Promise<void> {
    // Sequelize sync handles table creation in development.
    // Production:
    // CREATE TABLE health_records (
    //   id INT AUTO_INCREMENT PRIMARY KEY,
    //   nombre VARCHAR(150) NOT NULL,
    //   descripcion TEXT NULL,
    //   isActive BOOLEAN NOT NULL DEFAULT TRUE,
    //   createdAt DATETIME NOT NULL,
    //   updatedAt DATETIME NOT NULL
    // );
  },

  async down(): Promise<void> {
    // Production: DROP TABLE health_records
  },
};
