"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SELLER_RESOURCES = exports.RESOURCE_CATALOG = void 0;
/**
 * Catálogo único de recursos protegibles por RBAC.
 *
 * Total: 58 recursos.
 *
 * seller = true:
 * recursos que puede ejecutar el rol SELLER.
 */
exports.RESOURCE_CATALOG = [
    // ==================== CLIENTES (7) ====================
    {
        method: "GET",
        path: "/api/clientes",
        description: "Listar clientes",
        seller: true,
    },
    {
        method: "GET",
        path: "/api/clientes/:id",
        description: "Consultar cliente",
        seller: true,
    },
    {
        method: "POST",
        path: "/api/clientes",
        description: "Crear cliente",
    },
    {
        method: "PUT",
        path: "/api/clientes/:id",
        description: "Actualizar cliente",
    },
    {
        method: "PATCH",
        path: "/api/clientes/:id",
        description: "Actualizar parcialmente cliente",
    },
    {
        method: "DELETE",
        path: "/api/clientes/:id",
        description: "Eliminar cliente",
    },
    {
        method: "PATCH",
        path: "/api/clientes/:id/deactivate",
        description: "Desactivar cliente",
    },
    // ==================== TIPOS DE PRODUCTO (7) ====================
    {
        method: "GET",
        path: "/api/tipos-producto",
        description: "Listar tipos de producto",
    },
    {
        method: "GET",
        path: "/api/tipos-producto/:id",
        description: "Consultar tipo de producto",
    },
    {
        method: "POST",
        path: "/api/tipos-producto",
        description: "Crear tipo de producto",
    },
    {
        method: "PUT",
        path: "/api/tipos-producto/:id",
        description: "Actualizar tipo de producto",
    },
    {
        method: "PATCH",
        path: "/api/tipos-producto/:id",
        description: "Actualizar parcialmente tipo de producto",
    },
    {
        method: "DELETE",
        path: "/api/tipos-producto/:id",
        description: "Eliminar tipo de producto",
    },
    {
        method: "PATCH",
        path: "/api/tipos-producto/:id/deactivate",
        description: "Desactivar tipo de producto",
    },
    // ==================== PRODUCTOS (7) ====================
    {
        method: "GET",
        path: "/api/productos",
        description: "Listar productos",
        seller: true,
    },
    {
        method: "GET",
        path: "/api/productos/:id",
        description: "Consultar producto",
        seller: true,
    },
    {
        method: "POST",
        path: "/api/productos",
        description: "Crear producto",
    },
    {
        method: "PUT",
        path: "/api/productos/:id",
        description: "Actualizar producto",
    },
    {
        method: "PATCH",
        path: "/api/productos/:id",
        description: "Actualizar parcialmente producto",
    },
    {
        method: "DELETE",
        path: "/api/productos/:id",
        description: "Eliminar producto",
    },
    {
        method: "PATCH",
        path: "/api/productos/:id/deactivate",
        description: "Desactivar producto",
    },
    // ==================== VENTAS (3) ====================
    {
        method: "GET",
        path: "/api/ventas",
        description: "Listar ventas",
        seller: true,
    },
    {
        method: "GET",
        path: "/api/ventas/:id",
        description: "Consultar venta",
        seller: true,
    },
    {
        method: "POST",
        path: "/api/ventas",
        description: "Registrar venta",
        seller: true,
    },
    // ==================== DETALLE DE VENTAS (1) ====================
    {
        method: "GET",
        path: "/api/ventas/:id/detalles",
        description: "Consultar detalle de una venta",
    },
    // ==================== USUARIOS (9) ====================
    {
        method: "GET",
        path: "/api/usuarios",
        description: "Listar usuarios",
    },
    {
        method: "GET",
        path: "/api/usuarios/:id",
        description: "Consultar usuario",
    },
    {
        method: "POST",
        path: "/api/usuarios",
        description: "Crear usuario",
    },
    {
        method: "PUT",
        path: "/api/usuarios/:id",
        description: "Actualizar usuario",
    },
    {
        method: "PATCH",
        path: "/api/usuarios/:id",
        description: "Actualizar parcialmente usuario",
    },
    {
        method: "DELETE",
        path: "/api/usuarios/:id",
        description: "Eliminar usuario",
    },
    {
        method: "PATCH",
        path: "/api/usuarios/:id/deactivate",
        description: "Desactivar usuario",
    },
    {
        method: "PATCH",
        path: "/api/usuarios/:id/password",
        description: "Cambiar contraseña",
    },
    {
        method: "GET",
        path: "/api/usuarios/:id/permisos",
        description: "Consultar permisos efectivos",
    },
    // ==================== ROLES (7) ====================
    {
        method: "GET",
        path: "/api/roles",
        description: "Listar roles",
    },
    {
        method: "GET",
        path: "/api/roles/:id",
        description: "Consultar rol",
    },
    {
        method: "POST",
        path: "/api/roles",
        description: "Crear rol",
    },
    {
        method: "PUT",
        path: "/api/roles/:id",
        description: "Actualizar rol",
    },
    {
        method: "PATCH",
        path: "/api/roles/:id",
        description: "Actualizar parcialmente rol",
    },
    {
        method: "DELETE",
        path: "/api/roles/:id",
        description: "Eliminar rol",
    },
    {
        method: "PATCH",
        path: "/api/roles/:id/deactivate",
        description: "Desactivar rol",
    },
    // ==================== RECURSOS (7) ====================
    {
        method: "GET",
        path: "/api/recursos",
        description: "Listar recursos",
    },
    {
        method: "GET",
        path: "/api/recursos/:id",
        description: "Consultar recurso",
    },
    {
        method: "POST",
        path: "/api/recursos",
        description: "Crear recurso",
    },
    {
        method: "PUT",
        path: "/api/recursos/:id",
        description: "Actualizar recurso",
    },
    {
        method: "PATCH",
        path: "/api/recursos/:id",
        description: "Actualizar parcialmente recurso",
    },
    {
        method: "DELETE",
        path: "/api/recursos/:id",
        description: "Eliminar recurso",
    },
    {
        method: "PATCH",
        path: "/api/recursos/:id/deactivate",
        description: "Desactivar recurso",
    },
    // ==================== ASIGNACIONES USUARIO-ROL (5) ====================
    {
        method: "GET",
        path: "/api/asignaciones-rol",
        description: "Listar asignaciones usuario-rol",
    },
    {
        method: "GET",
        path: "/api/asignaciones-rol/:id",
        description: "Consultar asignación usuario-rol",
    },
    {
        method: "POST",
        path: "/api/asignaciones-rol",
        description: "Asignar rol a usuario",
    },
    {
        method: "PATCH",
        path: "/api/asignaciones-rol/:id/deactivate",
        description: "Retirar rol de usuario",
    },
    {
        method: "PATCH",
        path: "/api/asignaciones-rol/:id/reactivate",
        description: "Reactivar rol de usuario",
    },
    // ==================== CONCESIONES ROL-RECURSO (5) ====================
    {
        method: "GET",
        path: "/api/concesiones-rol",
        description: "Listar concesiones rol-recurso",
    },
    {
        method: "GET",
        path: "/api/concesiones-rol/:id",
        description: "Consultar concesión rol-recurso",
    },
    {
        method: "POST",
        path: "/api/concesiones-rol",
        description: "Conceder recurso a rol",
    },
    {
        method: "PATCH",
        path: "/api/concesiones-rol/:id/deactivate",
        description: "Revocar recurso de rol",
    },
    {
        method: "PATCH",
        path: "/api/concesiones-rol/:id/reactivate",
        description: "Reactivar recurso de rol",
    },
];
/**
 * Recursos permitidos para SELLER.
 *
 * Debe contener exactamente 7 recursos.
 */
exports.SELLER_RESOURCES = exports.RESOURCE_CATALOG.filter((resource) => resource.seller === true);
/**
 * Validación interna del catálogo.
 */
if (exports.RESOURCE_CATALOG.length !== 58) {
    throw new Error(`RESOURCE_CATALOG debe contener 58 recursos; contiene ${exports.RESOURCE_CATALOG.length}`);
}
if (exports.SELLER_RESOURCES.length !== 7) {
    throw new Error(`SELLER_RESOURCES debe contener 7 recursos; contiene ${exports.SELLER_RESOURCES.length}`);
}
//# sourceMappingURL=resource-catalog.js.map