export const createProductsTableMigration = {
  name: 'create-products-table',

  async up(): Promise<void> {
    // Sequelize sync handles table creation in development.
    // Production: CREATE TABLE products (
    //   id INT AUTO_INCREMENT PRIMARY KEY,
    //   sku VARCHAR(50) NOT NULL UNIQUE,
    //   nombre VARCHAR(150) NOT NULL,
    //   descripcion TEXT NULL,
    //   precio DECIMAL(12, 2) NOT NULL,
    //   isActive BOOLEAN NOT NULL DEFAULT TRUE,
    //   createdAt DATETIME NOT NULL,
    //   updatedAt DATETIME NOT NULL
    // )
  },

  async down(): Promise<void> {
    // Production: DROP TABLE products
  },
};
