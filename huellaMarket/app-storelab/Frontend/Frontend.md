# HuellaMarket — Frontend

## ISS-01-E01-estructura-inicial

## 1.7 Ajustar el presupuesto de build

#### ISS-01-E02-instalacion-primeng

![](../Backendexpress/images/clipboard-3950535841.png)

#### ISS-01-E03-instalacion-tailwind

![](../Backendexpress/images/clipboard-2484577358.png)

#### ISS-01-E04-estilos-globales

![](../Backendexpress/images/clipboard-4100407071.png)

#### ISS-01-E05-build

![](../Backendexpress/images/clipboard-4066984654.png)

### 1.4.1 Licencia de PrimeNG 22 (obligatoria para la entrega limpia)

![](../Backendexpress/images/clipboard-2495897479.png)

#### 1.5 Pantalla de arranque: `App` compone el componente `demo/ejemplo`

![](../Backendexpress/images/clipboard-2370591051.png) 

![](../Backendexpress/images/clipboard-886664677.png)

![](../Backendexpress/images/clipboard-175669201.png)

#### 1.6 Personalizar `index.html`

![](../Backendexpress/images/clipboard-964325939.png)

#### 1.7 Ajustar el presupuesto de build

![](images/clipboard-4206667787.png)

#### 1.8 Primera ejecución

![](images/clipboard-827092409.png)

#### 1.9 Anatomía del componente `demo/ejemplo` y signals

![](images/clipboard-1353199431.png)

#### 1.9.1 De `index.html` a la pantalla - 1.9.2 Los cuatro archivos de un componente

![](images/clipboard-644466955.png)

#### 1.9.3 Leer `ejemplo.ts` línea a línea

![](images/clipboard-526041344.png)

#### 1.9.4 Las cuatro formas de conectar la clase con el HTML

![](images/clipboard-3409941300.png)

#### 1.9.5 Signals: el estado que avisa a la vista

![](images/clipboard-3297736741.png)

#### 1.9.6 - 1.9.9

![](images/clipboard-3872407086.png)

## Verificacion del ISS

![](images/clipboard-1928885789.png)

# Fase I: Frontend — ISS-01A — Esqueleto Header / Aside / contenido / Footer

#### Componentes

![](images/clipboard-1301634119.png)

#### 1.3 Contenido de cada componente

![](images/clipboard-2943158021.png)

#### 1.4 Componer las cuatro regiones en `App`

![](images/clipboard-174430125.png)

### ISS-01A-02 — Estructura de las cuatro regiones en App

![](images/clipboard-743530761.png)

### Cierre ISS Y Comprobacion

![](images/clipboard-4257750840.png)

![](images/clipboard-3889312561.png)

# Fase I: Frontend — ISS-02 — Núcleo: environment, modelos, servicios y layout

## 2.1 `environment`: una sola URL para todo el frente

![](images/clipboard-3882975197.png)

### 2.1.1 Licencia PrimeUI (`primeUiLicense`)

![](images/clipboard-3488404442.png)

#### 2.2 Modelos: reflejar el backend, no inventarlo

##### Modelos

![](images/clipboard-3589124205.png)

#### 2.3 Servicios HTTP por feature: desenvolver la respuesta

![](images/clipboard-2718435989.png)

#### 2.4 Utilidades transversales: `toApiMessage` y `NotificationService`

![](images/clipboard-3611402894.png)

#### 2.5 Componentes compartidos: `PageHeader`, `EmptyState`, `StatusTag`

![](images/clipboard-3068213683.png)

#### 2.6 `Shell`: conservar el esqueleto al navegar

![![](images/clipboard-1243059021.png)](images/clipboard-2962217229.png)

#### Rutas

![](images/clipboard-1299252623.png)

#### 2.7 Registrar `HttpClient` sin interceptores de sesión & 2.8 Comprobar antes de avanzar

![](images/clipboard-1267007730.png)

![](images/clipboard-515801685.png)

# ISS-03 · CRUD de clientes 

#### 3.1 Generar componentes con CLI

![](images/clipboard-953810741.png)

#### 3.2 Utilidad de filtro local

![](images/clipboard-312586724.png)

#### 3.3 Formulario reactivo reutilizable

![![](images/clipboard-2732549097.png)](images/clipboard-4256191335.png)

#### 3.4 Lista con estado en Signals

![](images/clipboard-1601560673.png)

#### 3.5 Plantilla de la lista

![](images/clipboard-40166866.png)

#### 3.6 Baja lógica vs baja física

![](images/clipboard-1465248721.png)

#### 3.7 Ruta y menú

![](images/clipboard-823179386.png)

## Verificación del ISS

![](images/clipboard-3844297771.png)

# Fase I: Business — ISS-04 — CRUD de mascota

#### 4.1 Endpoint y contrato

| Operación      | Método y ruta                        | Respuesta  |
|----------------|--------------------------------------|------------|
| Listar activos | `GET /api/mascotas`                  | `{ pets }` |
| Obtener una    | `GET /api/mascotas/:id`              | `{ pet }`  |
| Crear          | `POST /api/mascotas`                 | `{ pet }`  |
| Actualizar     | `PATCH /api/mascotas/:id`            | `{ pet }`  |
| Reemplazar     | `PUT /api/mascotas/:id`              | `{ pet }`  |
| Baja lógica    | `PATCH /api/mascotas/:id/deactivate` | `{ pet }`  |
| Baja física    | `DELETE /api/mascotas/:id`           | `204`      |

#### 4.2 Generar con CLI

## ![](images/clipboard-2122865401.png)

#### 4.3 Servicio

![](images/clipboard-1822496664.png)

#### 4.4 Formulario

![](images/clipboard-408856435.png)

![](images/clipboard-113960460.png)

#### 4.5 Lista

![](images/clipboard-885581395.png)

#### Plantilla 

![](images/clipboard-1437042027.png)

#### 4.6 Ruta 

![](images/clipboard-1520836015.png)

#### Comprobacion

![](images/clipboard-4075221034.png)

![](images/clipboard-1337200649.png)

# Fase I: ISS-05 — CRUD de FichaSanitaria

#### 5.2 Generar con CLI

![](images/clipboard-2924560113.png)

#### 5.3 Servicio

![](images/clipboard-972870089.png)

#### 5.4 Formulario

![](images/clipboard-874384317.png)

#### 5.5 Lista & 5.6 Ruta

![](images/clipboard-3245151203.png)

![](images/clipboard-3877778461.png)
