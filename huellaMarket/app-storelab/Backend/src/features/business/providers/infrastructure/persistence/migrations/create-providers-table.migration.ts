export const createProvidersTableMigration = {
  name: 'create-providers-table',

  async up(): Promise<void> {
    // Sequelize sync handles table creation in development.
    // Production: CREATE TABLE providers (
    //   id INT AUTO_INCREMENT PRIMARY KEY,
    //   nit VARCHAR(50) NOT NULL UNIQUE,
    //   razon_social VARCHAR(200) NOT NULL,
    //   contacto VARCHAR(150) NULL,
    //   telefono VARCHAR(30) NULL,
    //   email VARCHAR(150) NULL UNIQUE,
    //   is_active BOOLEAN NOT NULL DEFAULT TRUE,
    //   createdAt DATETIME NOT NULL,
    //   updatedAt DATETIME NOT NULL
    // )
  },

  async down(): Promise<void> {
    // Production: DROP TABLE providers
  },
};
