export const createServiceAppointmentsTableMigration = {
  name: 'create-service-appointments-table',

  async up(): Promise<void> {
    // Sequelize sync handles table creation in development.
    // Production:
    // CREATE TABLE service_appointments (
    //   id INT AUTO_INCREMENT PRIMARY KEY,
    //   nombre VARCHAR(150) NOT NULL,
    //   descripcion TEXT NULL,
    //   isActive BOOLEAN NOT NULL DEFAULT TRUE,
    //   createdAt DATETIME NOT NULL,
    //   updatedAt DATETIME NOT NULL
    // );
  },

  async down(): Promise<void> {
    // Production: DROP TABLE service_appointments
  },
};
