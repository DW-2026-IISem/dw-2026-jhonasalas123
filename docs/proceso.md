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

#### **5.4 — database.module.ts / providers**

![](images/clipboard-2662395270.png)

#### **5.5 — database.providers.ts**

![](images/clipboard-1888495285.png)

#### **5.6 — Opciones Sequelize por dialecto**

![](images/clipboard-2292136099.png)

#### **5.7 — Factory Sequelize (sin modelos aún)**

![](images/clipboard-3589271501.png)

#### **5.8 — DatabaseSeederService (sin seeders aún)**

![](images/clipboard-3574642465.png)

#### **5.9 — Módulo global Sequelize**

![](images/clipboard-2344343252.png)

#### **5.10 — Verificar conexión a BD**

![](images/clipboard-3445661240.png)

## **FASE 6 — `05_BASE_APP_COMMON_SECURITY`**

#### **6.1 — config/app/app.constants.ts**

![](images/clipboard-1896226440.png)

#### **6.2 — config/app/app.config.ts**

![](images/clipboard-1046357510.png)

#### **6.3 — config/logger/logger.config.ts**

![](images/clipboard-1977780460.png)

#### **6.4 — config/logger/logger.module.ts**

![](images/clipboard-4154241842.png)

#### **6.5 — config/jwt/jwt.constants.ts**

![](images/clipboard-2939679971.png)

#### **6.6 — config/jwt/jwt.config.ts**

![](images/clipboard-4107577516.png)

#### **6.7 — config/swagger/swagger.constants.ts**

![](images/clipboard-3183677986.png)

#### **6.8 — config/swagger/swagger.config.ts**

![](images/clipboard-967285254.png)

#### **6.9 — common/enums/status.enum.ts**

![](images/clipboard-1132031916.png)

#### **6.10 — common/enums/http-method.enum.ts**

![](images/clipboard-4167640335.png)

#### **6.11 — common/enums/sort-order.enum.ts**

![](images/clipboard-1902255360.png)

#### **6.12 — common/constants/app.constants.ts**

![](images/clipboard-3939694231.png)

#### **6.13 — common/constants/pagination.constants.ts**

![](images/clipboard-702927215.png)

#### **6.14 — common/exceptions/application.exception.ts**

![](images/clipboard-3347841169.png)

#### **6.15 — common/exceptions/domain.exception.ts**

![](images/clipboard-2792282460.png)

#### **6.16 — common/exceptions/entity-not-found.exception.ts}**

![](images/clipboard-368636939.png)

#### **6.17 — common/exceptions/validation.exception.ts**

![](images/clipboard-1388653081.png)

#### **6.18 — common/filters/global-exception.filter.ts**

![](images/clipboard-931421141.png)

#### **6.19 — common/filters/sequelize-exception.filter.ts**

![](images/clipboard-1248147768.png)

#### **6.20 — common/interceptors/response.interceptor.ts**

![](images/clipboard-1978915518.png)

#### **6.21 — common/interceptors/logging.interceptor.ts**

![](images/clipboard-399237753.png)

#### **6.22 — common/interceptors/timeout.interceptor.ts**

![](images/clipboard-3016366552.png)

#### **6.23 — common/pipes/validation.pipe.ts**

![](images/clipboard-3418885715.png)

#### **6.24 — common/pipes/parse-positive-int.pipe.ts**

![](images/clipboard-682144508.png)

#### **6.25 — common/decorators/public.decorator.ts**

![](images/clipboard-2532470218.png)

#### **6.26 — common/decorators/roles.decorator.ts**

![](images/clipboard-2799631593.png)

#### **6.27 — common/decorators/current-user.decorator.ts**

![](images/clipboard-3376819292.png)

#### **6.28 — common/decorators/resource.decorator.ts**

![](images/clipboard-2218335861.png)

#### **6.29 — common/interfaces/authenticated-user.interface.ts**

![](images/clipboard-1104190971.png)

#### **6.30 — common/interfaces/pagination.interface.ts**

![](images/clipboard-3387150617.png)

#### **6.31 — common/interfaces/api-response.interface.ts**

![](images/clipboard-2359661714.png)

#### **6.32 — common/types/nullable.type.ts**

![](images/clipboard-2647756880.png)

#### **6.33 — common/types/optional.type.ts**

![](images/clipboard-1748815955.png)

#### **6.34 — common/utils/pagination.util.ts**

![](images/clipboard-2998110863.png)
