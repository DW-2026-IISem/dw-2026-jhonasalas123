# **Manual de creación del Backend — NestJS + Sequelize (Clean Architecture)**

#### **1.1 — Crear carpetas padre y permisos**

![](images/clipboard-644357831.png)

#### **1.2 — Instalar Nest CLI**

![](images/clipboard-3330699498.png)

#### **1.3 — Crear proyecto NestJS**

![](images/clipboard-2209616918.png)

#### **1.4 — Crear `.env` mínimo (puerto)**

![](images/clipboard-2360521614.png)

## **FASE 2 — `01_BASE_DEPS_Y_PUERTO`**

#### **2.1 — Dependencias de producción**

![](images/clipboard-575585045.png)

#### **2.2 — Dependencias de desarrollo**

![](images/clipboard-1320736721.png)

#### **2.3 — Script para liberar puerto (evita EADDRINUSE)**

![](images/clipboard-3307021868.png)

#### **2.4 — Actualizar scripts npm en package.json**

![](images/clipboard-2527095474.png)

#### **2.5 — Verificar arranque base**

![](images/clipboard-4018784774.png)

## **FASE 3 — `02_BASE_ESTRUCTURA_CA`**

#### **3.1 — Crear árbol base de carpetas**

![](images/clipboard-1270465686.png)

## **FASE 4 — `03_BASE_ENTORNO_ENV`**

#### **4.1 — Crear `.env.example` y actualizar `.env` completo**

![](images/clipboard-2094063001.png)

#### **4.2 — Interface de entorno**

![](images/clipboard-1915459264.png)

#### **4.3 — Validación de entorno con class-validator**

![](images/clipboard-2325963463.png)

#### **4.4 — Resolver de credenciales por motor**

![](images/clipboard-2904547181.png)

#### **4.5 — Factory registerAs de entorno**

![](images/clipboard-3132439565.png)

## **FASE 5 — `04_BASE_DATABASE_SEQUELIZE`**

#### **5.1 — Constante SEQUELIZE_TOKEN**

![](images/clipboard-675955641.png)

#### **5.2 — Tipos auxiliares de database config**

![](images/clipboard-2653562849.png)

#### **5.3 — database.config.ts**

![](images/clipboard-1496151154.png)
