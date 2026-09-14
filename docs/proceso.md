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

#### **6.35 — common/utils/date.util.ts**

![](images/clipboard-637079936.png)

#### **6.36 — common/utils/string.util.ts**

![](images/clipboard-3152760715.png)

#### **6.37 — infrastructure/security/hashing/password-hasher.interface.ts**

![](images/clipboard-2936896169.png)

#### **6.38 — infrastructure/security/hashing/bcrypt-password-hasher.service.ts**

![](images/clipboard-1122265452.png)

#### **6.39 — infrastructure/security/tokens/token.interface.ts**

![](images/clipboard-1048628365.png)

#### **6.40 — infrastructure/security/tokens/token.service.ts**

![](images/clipboard-2504478888.png)

#### **6.41 — infrastructure/security/security.module.ts**

![](images/clipboard-1017814735.png)

#### **6.42 — Actualizar main.ts (bootstrap completo)**

![](images/clipboard-1845134989.png)

#### **6.43 — Actualizar app.module.ts (base sin features ni guards)**

![](images/clipboard-1487337971.png)

#### **6.44 — Verificar bootstrap transversal**

![](images/clipboard-3473132701.png)

## **FASE 7 — `06_BUSINESS_CLIENTS`**

#### **7.1 — features/business/clients/domain/entities/client.entity.ts**

![](images/clipboard-1431266673.png)

#### **7.2 — features/business/clients/domain/exceptions/client-email-already-exists.exception.ts**

![](images/clipboard-3777060882.png)

#### **7.3 — features/business/clients/domain/exceptions/client-not-found.exception.ts**

![](images/clipboard-707563238.png)

#### **7.4 — features/business/clients/domain/interfaces/client-repository.interface.ts**

![](images/clipboard-3966737841.png)

#### **7.5 — features/business/clients/domain/validators/client-email.validator.ts**

![](images/clipboard-290711077.png)

#### **7.6 — features/business/clients/domain/validators/client-phone.validator.ts**

![](images/clipboard-3016966922.png)

#### **7.7 — features/business/clients/infrastructure/persistence/models/client.model.ts**

![](images/clipboard-500992739.png)

#### **7.8 — features/business/clients/infrastructure/persistence/repositories/client.repository.ts**

![](images/clipboard-1567943118.png)

#### **7.9 — features/business/clients/infrastructure/persistence/migrations/create-clients-table.migration.ts**

![](images/clipboard-1720976768.png)

#### **7.10 — features/business/clients/infrastructure/persistence/seeders/clients.seeder.ts**

![](images/clipboard-3698252388.png)

#### **7.11 — features/business/clients/application/dto/client-filter.dto.ts**

![](images/clipboard-2229405414.png)

#### **7.12 — features/business/clients/application/dto/client-response.dto.ts**

![](images/clipboard-222020099.png)

#### **7.13 — features/business/clients/application/dto/create-client.dto.ts**

![](images/clipboard-2525773992.png)

#### **7.14 — features/business/clients/application/dto/update-client.dto.ts**

![](images/clipboard-1833941271.png)

#### **7.15 — features/business/clients/application/mappers/client.mapper.ts**

![](images/clipboard-2260049568.png)

#### **7.16 — features/business/clients/application/use-cases/create-client.use-case.ts**

![](images/clipboard-869224407.png)

#### **7.17 — features/business/clients/application/use-cases/delete-client.use-case.ts**

![](images/clipboard-3088216013.png)

#### **7.18 — features/business/clients/application/use-cases/get-client.use-case.ts**

![](images/clipboard-1719984560.png)

#### **7.19 — features/business/clients/application/use-cases/list-clients.use-case.ts**

![](images/clipboard-4027609254.png)

#### **7.20 — features/business/clients/application/use-cases/update-client.use-case.ts**

![](images/clipboard-160154529.png)

#### **7.21 — features/business/clients/presentation/http/serializers/client.serializer.ts**

![](images/clipboard-2147250508.png)

#### **7.22 — features/business/clients/presentation/http/controllers/clients.controller.ts**

![](images/clipboard-1534942438.png)

#### **7.23 — features/business/clients/index.ts**

![](images/clipboard-3247686518.png)

#### **7.24 — features/business/clients/clients.module.ts**

![](images/clipboard-82377584.png)

#### **7.25 — Actualizar sequelize.factory.ts (registrar modelos)**

![](images/clipboard-497501752.png)

#### **7.26 — Actualizar business.module.ts**

![](images/clipboard-1679250301.png)

#### **7.27 — Actualizar database-seeder.service.ts**

![](images/clipboard-95650476.png)

#### **7.28 — Actualizar app.module.ts**

![](images/clipboard-3417103229.png)

#### **7.29 — Verificar tabla física `clients` y API**

![](images/clipboard-2071816516.png)

## **FASE 8 — `07_BUSINESS_PRODUCT_TYPES`**

#### **8.1 — features/business/product-types/domain/entities/product-type.entity.ts**

![](images/clipboard-694799460.png)

#### **8.2 — features/business/product-types/domain/exceptions/product-type-not-found.exception.ts**

![](images/clipboard-1821105710.png)

#### **8.3 — features/business/product-types/domain/interfaces/product-type-repository.interface.ts**

![](images/clipboard-2373279083.png)

#### **8.4 — features/business/product-types/infrastructure/persistence/models/product-type.model.ts**

![](images/clipboard-3746581091.png)

#### **8.5 — features/business/product-types/infrastructure/persistence/repositories/product-type.repository.ts**

![](images/clipboard-896540932.png)

#### **8.6 — features/business/product-types/infrastructure/persistence/migrations/create-product-types-table.migration.ts**

![](images/clipboard-2900324270.png)

#### **8.7 — features/business/product-types/infrastructure/persistence/seeders/product-types.seeder.ts**

![](images/clipboard-2916315597.png)

#### **8.8 — features/business/product-types/application/dto/create-product-type.dto.ts**

![](images/clipboard-1382026142.png)

#### **8.9 — features/business/product-types/application/dto/product-type-filter.dto.ts**

![](images/clipboard-4032845014.png)

#### **8.10 — features/business/product-types/application/dto/product-type-response.dto.ts**

![](images/clipboard-1919898583.png)

#### **8.11 — features/business/product-types/application/dto/update-product-type.dto.ts**

![](images/clipboard-2022023377.png)

#### **8.12 — features/business/product-types/application/mappers/product-type.mapper.ts**

![](images/clipboard-2709370058.png)

#### **8.13 — features/business/product-types/application/use-cases/create-product-type.use-case.ts**

![](images/clipboard-2775619550.png)

#### **8.14 — features/business/product-types/application/use-cases/delete-product-type.use-case.ts**

![](images/clipboard-3506829798.png)

#### **8.15 — features/business/product-types/application/use-cases/get-product-type.use-case.ts**

![](images/clipboard-4034449054.png)

#### **8.16 — features/business/product-types/application/use-cases/list-product-types.use-case.ts**

![](images/clipboard-4161913725.png)

#### **8.17 — features/business/product-types/application/use-cases/update-product-type.use-case.ts**

![](images/clipboard-713126940.png)

#### **8.18 — features/business/product-types/presentation/http/serializers/product-type.serializer.ts**

![](images/clipboard-2651258699.png)

#### **8.19 — features/business/product-types/presentation/http/controllers/product-types.controller.ts**

![](images/clipboard-3573081554.png)

#### **8.20 — features/business/product-types/index.ts**

![](images/clipboard-876814702.png)

#### **8.21 — features/business/product-types/product-types.module.ts**

![](images/clipboard-2078598359.png)

#### **8.22 — Actualizar sequelize.factory.ts (registrar modelos)**

![](images/clipboard-3592349215.png)

#### **8.23 — Actualizar business.module.ts**

![](images/clipboard-2049412918.png)

#### **8.24 — Actualizar database-seeder.service.ts**

![](images/clipboard-1106831598.png)

#### **8.25 — Actualizar app.module.ts**

![](images/clipboard-2852762864.png)

#### **8.26 — Verificar tabla `product_types`**

![](images/clipboard-563707239.png)

## **FASE 9 — `08_BUSINESS_PRODUCTS`**

#### **9.1 — features/business/products/domain/entities/product.entity.ts**

![](images/clipboard-715789671.png)

#### **9.2 — features/business/products/domain/exceptions/invalid-product-price.exception.ts**

![](images/clipboard-145114593.png)

#### **9.3 — features/business/products/domain/exceptions/invalid-product-stock.exception.ts**

![](images/clipboard-3958029187.png)

#### **9.4 — features/business/products/domain/exceptions/product-not-found.exception.ts**

![](images/clipboard-1230852227.png)

#### **9.5 — features/business/products/domain/interfaces/product-repository.interface.ts**

![](images/clipboard-2824975003.png)

#### **9.6 — features/business/products/domain/validators/product-price.validator.ts**

![](images/clipboard-1035984560.png)

#### **9.7 — features/business/products/domain/validators/product-stock.validator.ts**

![](images/clipboard-1783560227.png)

#### **9.8 — features/business/products/infrastructure/persistence/models/product.model.ts**

![](images/clipboard-861124502.png)

#### **9.9 — features/business/products/infrastructure/persistence/repositories/product.repository.ts**

![](images/clipboard-3850153246.png)

#### **9.10 — features/business/products/infrastructure/persistence/migrations/create-products-table.migration.ts**

![](images/clipboard-1886181459.png)

#### **9.11 — features/business/products/infrastructure/persistence/seeders/products.seeder.ts**

![](images/clipboard-2027212492.png)

#### **9.12 — features/business/products/application/dto/create-product.dto.ts**

![](images/clipboard-1225053868.png)

#### **9.13 — features/business/products/application/dto/product-filter.dto.ts**

![](images/clipboard-3644007537.png)

#### **9.14 — features/business/products/application/dto/product-response.dto.ts**

![](images/clipboard-3899688369.png)

#### **9.15 — features/business/products/application/dto/update-product.dto.ts**

![](images/clipboard-1772747195.png)

#### **9.16 — features/business/products/application/mappers/product.mapper.ts**

![](images/clipboard-2158981675.png)

#### **9.17 — features/business/products/application/use-cases/create-product.use-case.ts**

![](images/clipboard-2339930617.png)

#### **9.18 — features/business/products/application/use-cases/delete-product.use-case.ts**

![](images/clipboard-3257680166.png)

#### **9.19 — features/business/products/application/use-cases/get-product.use-case.ts**

![](images/clipboard-4162540761.png)

#### **9.20 — features/business/products/application/use-cases/list-products.use-case.ts**

![](images/clipboard-3594336737.png)

#### **9.21 — features/business/products/application/use-cases/update-product.use-case.ts**

![](images/clipboard-646446265.png)

#### **9.22 — features/business/products/presentation/http/serializers/product.serializer.ts**

![](images/clipboard-476671576.png)

#### **9.23 — features/business/products/presentation/http/controllers/products.controller.ts**

![](images/clipboard-3024420827.png)

#### **9.24 — features/business/products/index.ts**

![](images/clipboard-912435158.png)

#### **9.25 — features/business/products/products.module.ts**

![](images/clipboard-324429656.png)

#### **9.26 — Actualizar sequelize.factory.ts (registrar modelos)**

![](images/clipboard-389590358.png)

#### **9.27 — Actualizar business.module.ts**

![](images/clipboard-4061595833.png)

#### **9.28 — Actualizar database-seeder.service.ts**

![](images/clipboard-2819861082.png)

#### **9.29 — Actualizar app.module.ts**

![](images/clipboard-274397684.png)

#### **9.30 — Verificar tabla `products`**

#### ![](images/clipboard-2728597939.png)

### Entidad Cliente — HuellaMarket

#### Código 1. Creación de la entidad Cliente para HuellaMarket

![](images/clipboard-1095980821.png)

#### 2. Excepción: correo del cliente ya registrado

![](images/clipboard-18920932.png)

#### 3. Excepción: Cliente no encontrado

![](images/clipboard-528012484.png)

#### 4. Interfaz del repositorio de Clientes

![](images/clipboard-3694671922.png)

#### 5. Validador de correo electrónico del Cliente

![](images/clipboard-2249393315.png)

#### 6. Validador de teléfono del Cliente

![](images/clipboard-141473876.png)

#### 7. Modelo de persistencia de Clientes

![](images/clipboard-1050149030.png)

#### 8. Repositorio de Clientes

![](images/clipboard-1645818042.png)

#### 9. Migración de la tabla Clientes

![](images/clipboard-2031641347.png)

#### 10. Seeder de Clientes

![](images/clipboard-4066356764.png)

#### 11. DTO de filtros de Clientes

![](images/clipboard-599492451.png)

#### 12.DTO de respuesta para clientes de HuellaMarket

![](images/clipboard-3779266152.png)

#### 13. DTO de creación de la entidad Cliente

![](images/clipboard-1808844266.png)

#### 14. DTO de actualización de la entidad Cliente

![](images/clipboard-3373732758.png)

#### 15. Mapper de la entidad Cliente

![](images/clipboard-2884141733.png)

#### 16. Caso de uso para crear la entidad Cliente

![](images/clipboard-1093480125.png)

#### 17. Caso de uso para eliminar la entidad Cliente

![](images/clipboard-1087912338.png)

#### 18. Caso de uso para consultar un cliente

![](images/clipboard-2510522351.png)

#### 19. Caso de uso para listar los clientes

![](images/clipboard-2033392550.png)

#### 20. Caso de uso para actualizar la entidad Cliente

![](images/clipboard-3543413634.png)

#### 21. Serializador HTTP de la entidad Cliente

![](images/clipboard-619966626.png)

#### 22. Controlador HTTP de la entidad Cliente

![](images/clipboard-2610847358.png)

#### 23. Índice de exportación del módulo Cliente

![](images/clipboard-417754141.png)

#### **24. Módulo de la entidad Cliente**

![](images/clipboard-902435255.png)

#### 25. Fábrica de conexión de Sequelize para la base de datos

![](images/clipboard-2415011056.png)

#### 26. Módulo empresarial de HuellaMarket

![](images/clipboard-426750508.png)

#### **27. Servicio de seeders de la base de datos**

![](images/clipboard-3465472806.png)

#### 28. Módulo principal de la aplicación HuellaMarket

![](images/clipboard-233002794.png)

#### **29.Verificar tabla física `clients` y API**

![](images/clipboard-2903724853.png)

### Entidad Mascotas — HuellaMarket

![](images/clipboard-1543065268.png)

#### 1.Excepción de Mascota no encontrada

![](images/clipboard-3835843843.png)

#### 2.Interfaz del repositorio de Mascota

![](images/clipboard-522738917.png)

#### 3.Modelo Sequelize de Mascota

![](images/clipboard-2373893534.png)

#### 4.Migración de la tabla Mascota

![](images/clipboard-3553105859.png)

#### 5.Seeder de Mascota

![](images/clipboard-3310665617.png)

#### 6.DTO de filtros de Mascota

![](images/clipboard-3796294721.png)

#### 7.DTO de respuesta de Mascota

![](images/clipboard-815392910.png)

#### 8.DTO para crear Mascota

![](images/clipboard-2399156844.png)

#### 9.DTO para actualizar Mascota

![](images/clipboard-3330983509.png)

#### 10.Mapper de Mascota

![](images/clipboard-1707720661.png)

#### 11.Caso de uso para crear Mascota

![](images/clipboard-978240580.png)

#### 12.Caso de uso para eliminar Mascota

![](images/clipboard-381356802.png)

#### 13.Caso de uso para consultar Mascota

![](images/clipboard-3278218849.png)

#### 14.Caso de uso para listar Mascotas

![](images/clipboard-4210245006.png)

#### 15.Serializador de Mascota

![](images/clipboard-2926617013.png)

#### 16.Controlador HTTP de Mascota

![](images/clipboard-3155646718.png)

#### 17.Índice de Mascota

![](images/clipboard-386036574.png)

#### 18.Módulo de Mascota

![](images/clipboard-242989651.png)

#### 19.Fábrica de Sequelize con Mascota

![](images/clipboard-2774052929.png)

#### 20.Módulo Business con Mascota

![](images/clipboard-2912379123.png)

#### 21.Servicio de Seeders de Base de Datos

![](images/clipboard-362496133.png)

#### **22.Verificar tabla física Mascota y API**

![](images/clipboard-2964144257.png)

### Entidad FichaSanitaria — HuellaMarket

![](images/clipboard-2855430725.png)

#### 1.Excepción de FichaSanitaria no encontrada

![](images/clipboard-1699277094.png)

#### 2.Interfaz del repositorio de FichaSanitaria

![](images/clipboard-2299879324.png)

#### 3.Modelo de persistencia de FichaSanitaria

![](images/clipboard-1593443124.png)

#### 4.Repositorio de FichaSanitaria

![](images/clipboard-132916377.png)

#### 5.Migración de FichaSanitaria

![](images/clipboard-1272730729.png)

#### 6.Seeder de FichaSanitaria

![](images/clipboard-2343528616.png)

#### 7.DTO de filtros de FichaSanitaria

![](images/clipboard-733524433.png)

#### 8.DTO de respuesta de FichaSanitaria

![](images/clipboard-4062132013.png)

#### 9.DTO para crear FichaSanitaria

![](images/clipboard-2214176920.png)

#### 10.DTO para actualizar FichaSanitaria

![](images/clipboard-942411606.png)

#### 11.Mapper de FichaSanitaria

![](images/clipboard-2905771346.png)

#### 12.Caso de uso para crear FichaSanitaria

![](images/clipboard-4277532415.png)

#### 13.Caso de uso para eliminar FichaSanitaria

![](images/clipboard-1588998976.png)

#### 14.Caso de uso para consultar FichaSanitaria

![](images/clipboard-911139132.png)

#### 15.Caso de uso para listar FichaSanitaria

![](images/clipboard-4083046542.png)

#### 16.Caso de uso para actualizar FichaSanitaria

![](images/clipboard-638670776.png)

#### 17.Serializador de Ficha Sanitaria

![](images/clipboard-1566829870.png)

#### 18.Controlador de Ficha Sanitaria

![](images/clipboard-1258769679.png)

#### 19.Índice del módulo de Ficha Sanitaria

![](images/clipboard-4110633021.png)

#### 20.Módulo de Ficha Sanitaria

![](images/clipboard-3827738712.png)

#### 21.Integración del modelo de Ficha Sanitaria en Sequelize

![](images/clipboard-2389579350.png)

#### 22.Integración del módulo de Ficha Sanitaria en BusinessModule

![](images/clipboard-858070304.png)

#### 23.Integración del seeder de Ficha Sanitaria

![](images/clipboard-440043703.png)

#### 24.Integración de Ficha Sanitaria en AppModule

![](images/clipboard-1591418173.png)

#### **25.Verificar tabla física Ficha Sanitaria y API**

![](images/clipboard-452605707.png)

### Entidad ServicioMascota — HuellaMarket

![](images/clipboard-816941957.png)

#### 1.Excepción de ServicioMascota no encontrada

![](images/clipboard-1064478990.png)

#### 2.Interfaz del repositorio de ServicioMascota

![](images/clipboard-13198249.png)

#### 3.Modelo Sequelize de ServicioMascota

![](images/clipboard-3648792236.png)

#### 4.Repositorio de ServicioMascota

![](images/clipboard-1986933862.png)

#### 5.Migración de ServicioMascota

![](images/clipboard-642679118.png)

#### 6.Seeder de ServicioMascota

![](images/clipboard-1229137612.png)

#### 7.DTO de filtro de ServicioMascota

![](images/clipboard-1651220586.png)

#### 8.DTO de respuesta de ServicioMascota

![](images/clipboard-2244796897.png)

#### 9.DTO para crear un ServicioMascota

![](images/clipboard-1521774668.png)
