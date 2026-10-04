## App-storelab-express

## **1. ISS-00 — Requisitos previos**

![](images/clipboard-2953996840.png)

## **2. ISS-01 — Esqueleto del proyecto**

### **2.2 Estructura de carpetas (features)**

![](images/clipboard-2172004904.png)

### **2.3 Dependencias base (Express + TypeScript)**

![](images/clipboard-4185457043.png)

### **2.4 TypeScript (`tsconfig.json`)**

![](images/clipboard-3553742170.png)

### **2.5 Servidor y App (esqueleto HTTP)**

### **2.5.1 `src/server.ts`**

![](images/clipboard-621899492.png)

### **2.5.2 `src/config/index.ts` (esqueleto)**

![](images/clipboard-4134049196.png)

### **Cierre del ISS**

![](images/clipboard-490996149.png)

## **3. ISS-02 — Infraestructura de base de datos**

### **3.1 Drivers Sequelize y `.env`**

![](images/clipboard-142485250.png)

### **3.2 Configuración Sequelize (`database/db.ts`)**

![](images/clipboard-2435250765.png)

### **3.3 Carpeta seeders**

![](images/clipboard-1949935651.png)

## **4. ISS-03-A — Feature Client — fundación (modelo, esqueleto, HTTP, cableado)**

### **4.1 Modelo Client**

![](images/clipboard-2526539959.png)

### **4.2 Esqueleto controller / routes + carpeta HTTP**

![](images/clipboard-4056139014.png)

### **4.3 Agregador Routes + cableado en Config**

![](images/clipboard-1916871547.png)

## **5. ISS-03-B — Feature Client — GetAll y GetOne**

### 5.1client.controller.ts

![](images/clipboard-781329076.png)

### 5.2`client.routes.ts`

![](images/clipboard-3873015014.png)

### 5.3 Archivo HTTP

![](images/clipboard-984687895.png)

### Get all funcionando

![](images/clipboard-2522999163.png)

## **6. ISS-03-C — Feature Client — Crear cliente**

![](images/clipboard-1028473867.png)

## **7. ISS-03-D — Feature Client — Update (PUT) y Update (PATCH)**

![](images/clipboard-2246169289.png)

## **8. ISS-03-E — Feature Client — Eliminar (físico y lógico)**

![](images/clipboard-1413222718.png)

## ![](images/clipboard-3561001537.png)

## **9. ISS-04 — Seeders con Faker (feature + runner externo)**

### **9.1 Seeder dentro del feature Client**

### ![](images/clipboard-2283409529.png)

### **9.2 SeedersRunner + conteos por entidad (`database/seeders`)**

![](images/clipboard-1402672218.png)

### 9.2.2 Rinner

![](images/clipboard-906212647.png)

## Entidad Mascota

## **Modelo Mascota**

![](images/clipboard-4185960399.png)

### Seeder de Mascota

![](images/clipboard-1294511916.png)

### Registrar Mascota

![](images/clipboard-2885131217.png)

### Actualizacion `counts.ts`

![](images/clipboard-2333766391.png)

### **Esqueleto controller / routes + carpeta HTTP**

![](images/clipboard-2206312952.png)

### **Agregador Routes + cableado en Config**

![](images/clipboard-627784261.png)

## **ISS-03-B — Feature Pet — GetAll y GetOne**

![](images/clipboard-3262388338.png)

### **Rutas — PARCHE `pet.routes.ts`**

![](images/clipboard-1638905410.png)

## **ISS-03-C — Feature pet — Crear mascota**

### **Controller — PARCHE `pet.controller.ts`**

![](images/clipboard-137300065.png)

## **ISS-03-D — Feature pet — Update (PUT) y Update (PATCH)**

![](images/clipboard-2478151403.png)

## **ISS-03-E — Feature pet — Eliminar (físico y lógico)**

![](images/clipboard-1620632760.png)

## **ISS-04 — Seeders con Faker (feature + runner externo)**

### **Seeder dentro del feature pet**

![](images/clipboard-2186064451.png)

### **SeedersRunner + conteos por entidad (`database/seeders`)**

### **Conteos**

![](images/clipboard-2278938281.png)

### **Runner**

![](images/clipboard-983147737.png)

## **ISS-05 — Swagger / OpenAPI (feature + registry externo)**

### **OpenAPI dentro del feature pet**

![](images/clipboard-138488024.png)

### **Registry externo + montaje en Config**

![](images/clipboard-2044688940.png)

## Entidad-FichaSanitaria

### Modelo FichaSanitaria

![](images/clipboard-871044821.png)

### **Controller + routes (CRUD completo)**

![](images/clipboard-4035572561.png)

![](images/clipboard-3538804418.png)

### **HTTP (REST Fichasanitaria)**

### GET

![](images/clipboard-211418564.png)

### CREATE

![](images/clipboard-397115958.png)

### UPDATE

![](images/clipboard-194935501.png)

### DELETE

![](images/clipboard-2420833123.png)

### **Seeder FichaSanitaria**

![](images/clipboard-893872930.png)

### **Swagger FichaSanitaria**

![](images/clipboard-1975769426.png)

### Seeder Runner

![](images/clipboard-974439264.png)

### **Conteos**

![](images/clipboard-3159369256.png)

## Entidad-ServicioMascota

### **ISS-03-A — Feature petService — fundación (modelo, esqueleto, HTTP, cableado)**

### Modelo de ServicioMascota

![](images/clipboard-734718797.png)

### Controller de ServicioMascota

![](images/clipboard-3567655662.png)

### **Agregador Routes + cableado en Config**

![](images/clipboard-1861405672.png)

### **ISS-03-B — Feature petService — GetAll y GetOne**

![](images/clipboard-671930400.png)

## **ISS-03-C — Feature petService — Crear Serviciomascota**

![](images/clipboard-1959782840.png)

##  **ISS-03-D — Feature petService — Update (PUT)** 

![](images/clipboard-3933299201.png)

## **Update (PATCH)**

![](images/clipboard-4131953778.png)

## **ISS-03-E — Feature petService — Eliminar (físico y lógico)**

![](images/clipboard-2429002990.png)

###  **Seeder Feature petService**

![](images/clipboard-3607874329.png)

### **SeedersRunner + conteos por entidad**

### **Conteos**

![](images/clipboard-3920671844.png)

### Runner

![](images/clipboard-2151712595.png)

##  **ISS-05 — Swagger / OpenAPI (feature + registry externo)**

![](images/clipboard-450018100.png)

### **OpenAPI**

![](images/clipboard-2359937609.png)

## **Entidad Citaservicio**

## **Modelo  Citaservicio**

![](images/clipboard-2342968426.png)

### **Esqueleto controller** 

![](images/clipboard-623870664.png)

### Agregador Routes + cableado en Config

![](images/clipboard-999289248.png)

## **Feature Citaservicio — GetAll y GetOne**

![](images/clipboard-4166652556.png)

###  **Update (PUT) y Update (PATCH)**

![](images/clipboard-4130193148.png)

### **Eliminar (físico y lógico)**

![](images/clipboard-2297112852.png)

![](images/clipboard-2222651955.png)

### Swagger

![](images/clipboard-130797003.png)

### Seeder

![](images/clipboard-4234599530.png)

### **SeedersRunner**

![](images/clipboard-2795349918.png)

## **Entidad producto**

## **Modelo  producto**

![](images/clipboard-1198425113.png)

### **Controller + routes**

![](images/clipboard-2041985080.png)
