## App-storelab-express

## 1. ISS-00 — Requisitos previos

![](images/clipboard-2953996840.png)

## 2. ISS-01 — Esqueleto del proyecto

### 2.2 Estructura de carpetas (features)

![](images/clipboard-2172004904.png)

### 2.3 Dependencias base (Express + TypeScript)

![](images/clipboard-4185457043.png)

### 2.4 TypeScript (`tsconfig.json`)

![](images/clipboard-3553742170.png)

### 2.5 Servidor y App (esqueleto HTTP)

### 2.5.1 `src/server.ts`

![](images/clipboard-621899492.png)

### 2.5.2 `src/config/index.ts` (esqueleto)

![](images/clipboard-4134049196.png)

### Cierre del ISS

![](images/clipboard-490996149.png)

## 3. ISS-02 — Infraestructura de base de datos

### 3.1 Drivers Sequelize y `.env`

![](images/clipboard-142485250.png)

### 3.2 Configuración Sequelize (`database/db.ts`)

![](images/clipboard-2435250765.png)

### 3.3 Carpeta seeders

![](images/clipboard-1949935651.png)

## 4. ISS-03-A — Feature Client — fundación (modelo, esqueleto, HTTP, cableado)

### 4.1 Modelo Client

![](images/clipboard-2526539959.png)

### 4.2 Esqueleto controller / routes + carpeta HTTP

![](images/clipboard-4056139014.png)

### 4.3 Agregador Routes + cableado en Config

![](images/clipboard-1916871547.png)

## 5. ISS-03-B — Feature Client — GetAll y GetOne

### 5.1client.controller.ts

![](images/clipboard-781329076.png)

### 5.2`client.routes.ts`

![](images/clipboard-3873015014.png)

### 5.3 Archivo HTTP

![](images/clipboard-984687895.png)

### Get all funcionando

![](images/clipboard-2522999163.png)

## 6. ISS-03-C — Feature Client — Crear cliente

![](images/clipboard-1028473867.png)

## 7. ISS-03-D — Feature Client — Update (PUT) y Update (PATCH)

![](images/clipboard-2246169289.png)

## 8. ISS-03-E — Feature Client — Eliminar (físico y lógico)

![](images/clipboard-1413222718.png)

## ![](images/clipboard-3561001537.png)

## 9. ISS-04 — Seeders con Faker (feature + runner externo)

### 9.1 Seeder dentro del feature Client

### ![](images/clipboard-2283409529.png)

### 9.2 SeedersRunner + conteos por entidad (`database/seeders`)

![](images/clipboard-1402672218.png)

### 9.2.2 Rinner

![](images/clipboard-906212647.png)

## Entidad Mascota

## Modelo Mascota

![](images/clipboard-4185960399.png)

### Seeder de Mascota

![](images/clipboard-1294511916.png)

### Registrar Mascota

![](images/clipboard-2885131217.png)

### Actualizacion `counts.ts`

![](images/clipboard-2333766391.png)

### Esqueleto controller / routes + carpeta HTTP

![](images/clipboard-2206312952.png)

### Agregador Routes + cableado en Config

![](images/clipboard-627784261.png)

## ISS-03-B — Feature Pet — GetAll y GetOne

![](images/clipboard-3262388338.png)

### Rutas — PARCHE `pet.routes.ts`

![](images/clipboard-1638905410.png)

## ISS-03-C — Feature pet — Crear mascota

### Controller — PARCHE `pet.controller.ts`

![](images/clipboard-137300065.png)

## ISS-03-D — Feature pet — Update (PUT) y Update (PATCH)

![](images/clipboard-2478151403.png)

## ISS-03-E — Feature pet — Eliminar (físico y lógico)

![](images/clipboard-1620632760.png)

## ISS-04 — Seeders con Faker (feature + runner externo)

### Seeder dentro del feature pet

![](images/clipboard-2186064451.png)

### SeedersRunner + conteos por entidad (`database/seeders`)

### Conteos

![](images/clipboard-2278938281.png)

### Runner

![](images/clipboard-983147737.png)

## ISS-05 — Swagger / OpenAPI (feature + registry externo)

### OpenAPI dentro del feature pet

![](images/clipboard-138488024.png)

### Registry externo + montaje en Config

![](images/clipboard-2044688940.png)

## Entidad-FichaSanitaria

### Modelo FichaSanitaria

![](images/clipboard-871044821.png)

### Controller + routes (CRUD completo)

![](images/clipboard-4035572561.png)

![](images/clipboard-3538804418.png)

### HTTP (REST Fichasanitaria)

### GET

![](images/clipboard-211418564.png)

### CREATE

![](images/clipboard-397115958.png)

### UPDATE

![](images/clipboard-194935501.png)

### DELETE

![](images/clipboard-2420833123.png)

### Seeder FichaSanitaria

![](images/clipboard-893872930.png)

### Swagger FichaSanitaria

![](images/clipboard-1975769426.png)

### Seeder Runner

![](images/clipboard-974439264.png)

### Conteos

![](images/clipboard-3159369256.png)

## Entidad-ServicioMascota

### ISS-03-A — Feature petService — fundación (modelo, esqueleto, HTTP, cableado)

### Modelo de ServicioMascota

![](images/clipboard-734718797.png)

### Controller de ServicioMascota

![](images/clipboard-3567655662.png)

### Agregador Routes + cableado en Config

![](images/clipboard-1861405672.png)

### ISS-03-B — Feature petService — GetAll y GetOne

![](images/clipboard-671930400.png)

## ISS-03-C — Feature petService — Crear Serviciomascota

![](images/clipboard-1959782840.png)

## ISS-03-D — Feature petService — Update (PUT)

![](images/clipboard-3933299201.png)

## Update (PATCH)

![](images/clipboard-4131953778.png)

## ISS-03-E — Feature petService — Eliminar (físico y lógico)

![](images/clipboard-2429002990.png)

### Seeder Feature petService

![](images/clipboard-3607874329.png)

### SeedersRunner + conteos por entidad

### Conteos

![](images/clipboard-3920671844.png)

### Runner

![](images/clipboard-2151712595.png)

## ISS-05 — Swagger / OpenAPI (feature + registry externo)

![](images/clipboard-450018100.png)

### OpenAPI

![](images/clipboard-2359937609.png)

## Entidad-Citaservicio

### Modelo Citaservicio

![](images/clipboard-2342968426.png)

### Esqueleto controller

![](images/clipboard-623870664.png)

### Agregador Routes + cableado en Config

![](images/clipboard-999289248.png)

## Feature Citaservicio — GetAll y GetOne

![](images/clipboard-4166652556.png)

### Update (PUT) y Update (PATCH)

![](images/clipboard-4130193148.png)

### Eliminar (físico y lógico)

![](images/clipboard-2297112852.png)

![](images/clipboard-2222651955.png)

### Swagger

![](images/clipboard-130797003.png)

### Seeder

![](images/clipboard-4234599530.png)

### SeedersRunner

![](images/clipboard-2795349918.png)

## Entidad- producto

### Modelo producto

![](images/clipboard-1198425113.png)

### Controller + routes

![](images/clipboard-2041985080.png)

### Cableado Routes + Config

![](images/clipboard-2836163832.png)

### Seeder

![](images/clipboard-1383294243.png)

### Swagger

![](images/clipboard-787751894.png)

![](images/clipboard-3862946770.png)

### GET ALL

![](images/clipboard-38379870.png)

### GetOne

![](images/clipboard-3442338231.png)

### Crear producto

![](images/clipboard-275010993.png)

### Delete fisico-logico

![](images/clipboard-1404118038.png)

![](images/clipboard-2238138446.png)

## Entidad- proveedor

### Modelo proveedor

![](images/clipboard-3595449174.png)

### controller + rutas

![](images/clipboard-2369224728.png)

### Agregador Routes + cableado en Config

![](images/clipboard-2584044214.png)

### Seeder

![](images/clipboard-1292041531.png)

### Swagger

![](images/clipboard-1167979107.png)

### GetAll y GetOne

![](images/clipboard-2678205855.png)

### POST + PUT + PATCH + DELETE lógico

![](images/clipboard-3306285842.png)

## Entidad-Inventario

### Modelo Inventario

![](images/clipboard-323184114.png)

### Controller + Routes

![](images/clipboard-3241429605.png)

### Agregador Routes + cableado en Config

![](images/clipboard-2361040934.png)

### Seeder

![](images/clipboard-1407212615.png)

![](images/clipboard-2730623672.png)

### Swagger

![](images/clipboard-3842101440.png)

### Registro de Inventario en Swagger

![](images/clipboard-144624698.png)

### GET ONE

![](images/clipboard-2750285564.png)

### Crear inventario

![](images/clipboard-853183043.png)

### PUT + PATCH + DELETE

![](images/clipboard-1158220480.png)

## Entidad-Venta

### Modelo venta

![](images/clipboard-2220029352.png)

### Controller + Routes

![](images/clipboard-2128871545.png)

![](images/clipboard-2008173471.png)

### Routes y Config

![](images/clipboard-606990779.png)

### Seeders

![](images/clipboard-1599088933.png)

### Swagger

![](images/clipboard-1738330863.png)

### GET ALL

![](images/clipboard-2434755135.png)

### GetOne y crear venta

![](images/clipboard-4025632153.png)

## Entidad- ventadetalle

### Modelo ventadetalle

![](images/clipboard-1137630126.png)

### Controller + Routes

![](images/clipboard-2675417610.png)

### Seeder

![](images/clipboard-2045802632.png)

### Swagger

![](images/clipboard-191772874.png)

### GET ALL y GET ONE+ crear

![](images/clipboard-1773727491.png)

### Update

![](images/clipboard-388771660.png)

## Entidad- pago

### Modelo pago

![](images/clipboard-2925849071.png)

### Controller + Routes

![](images/clipboard-1436311315.png)

### Seeder + conteo + runner

![](images/clipboard-3145381981.png)

### Swagger

![](images/clipboard-2761919822.png)

### GetAll y GetOne

![](images/clipboard-49806785.png)

### POST + PUT + PATCH

![](images/clipboard-3894138759.png)

# **Cierre**

![](images/clipboard-3483697605.png)

# **Unidad ISS-09 · Auth base (seguridad y modelos)**

## **Fase II: Auth con RBAC — ISS-09 — Base de seguridad compartida y modelos Auth**

### **14.1 Dependencias y variables de entorno**

![](images/clipboard-1840933329.png)

### **14.2 `password.ts` — hash de contraseña y hashes de tokens**

![](images/clipboard-3817592344.png)

### **14.3 `jwt.ts` — firma y verificación del access token**

![](images/clipboard-13496416.png)

### **14.4 `resource-match.ts` — casar la petición con el recurso**

![](images/clipboard-1508260441.png)

### **14.5 `auth-user.ts` — la identidad en `Request`**

![](images/clipboard-1527496409.png)

### **14.6 `error-response.ts` y PARCHE de `BaseController`**

![](images/clipboard-1344113736.png)

![](images/clipboard-3736078364.png)

### **14.7 `swagger-security.ts` — seguridad reutilizable para OpenAPI**

![](images/clipboard-1815531472.png)

### **14.8 Los seis modelos Sequelize**

![](images/clipboard-2626333614.png)

### **14.9 `rbac.associations.ts` — el grafo en un solo lugar**

![](images/clipboard-655282584.png)

### **14.10 Cableado de modelos en `config` y `seeders`**

![](images/clipboard-3752984246.png)

# **Unidad ISS-10 · Feature Users (identidad y contraseña)**

## **Fase II: Auth con RBAC — ISS-10 — Feature Users (identidad y contraseña)**

### **15.1 DTOs del feature**

![](images/clipboard-1350562022.png)

### **15.2 Repository**

![](images/clipboard-942452729.png)

### **15.3 Service**

![](images/clipboard-774994982.png)

### **15.4 Controller**

![](images/clipboard-204034451.png)

### **15.5 Rutas (modalidad JWT + RBAC)**

![](images/clipboard-1581473999.png)

### **15.6 Seeder de usuarios canónicos**

![](images/clipboard-2188830725.png)

### **15.7 Swagger del feature**

![](images/clipboard-81587363.png)

### **15.8 Pruebas HTTP**

![](images/clipboard-129744231.png)

# **Unidad ISS-11 · Features Roles y Resources**

## **Fase II: Auth con RBAC — ISS-11 — Features Roles y Resources (catálogo de autorización)**

### **16.1 Feature Roles — DTOs**

![](images/clipboard-3203539984.png)

### **16.2 Feature Roles — repository, service, controller y rutas**

![](images/clipboard-1892008834.png)

### **16.3 Feature Roles — seeder y swagger**

![](images/clipboard-1238839320.png)

### **16.4 Feature Resources — DTOs y catálogo semilla**

![](images/clipboard-306371893.png)

### **16.5 Feature Resources — repository, service, controller y rutas**

![](images/clipboard-1003734806.png)

### **16.6 Feature Resources — seeder y swagger**

![](images/clipboard-142720479.png)

### **16.7 Pruebas HTTP**

![](images/clipboard-1736115407.png)

## Cierre

![](images/clipboard-4237420416.png)

# **Unidad ISS-12 · Features RoleUsers y ResourceRoles**

## **Fase II: Auth con RBAC — ISS-12 — Features RoleUsers y ResourceRoles (asignar roles y conceder permisos)**

![](images/clipboard-2654773432.png)

# **Unidad ISS-13 · Middlewares de acceso y las 3 modalidades**

## **Fase II: Auth con RBAC — ISS-13 — Middlewares de acceso y las tres modalidades en rutas**

![](images/clipboard-2055331801.png)
