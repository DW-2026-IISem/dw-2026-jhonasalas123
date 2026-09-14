export const createPetsTableMigration = {
  name: 'create-pets-table',
  async up(): Promise<void> {
    // Sequelize sync handles table creation in development.
    // Production:
    // CREATE TABLE pets (
    //   id INT AUTO_INCREMENT PRIMARY KEY,
    //   nombre VARCHAR(100) NOT NULL,
    //   descripcion TEXT NULL,
    //   isActive BOOLEAN NOT NULL DEFAULT TRUE,
    //   createdAt DATETIME NOT NULL,
    //   updatedAt DATETIME NOT NULL
    // );
  },
  async down(): Promise<void> {
    // Production: DROP TABLE pets
  },
};
