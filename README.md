# Mi Lista de Tareas - Task Manager

Una aplicación web de gestión de tareas construida con Angular. Permite crear, eliminar y marcar tareas como completadas. Los datos se almacenan localmente usando localStorage.

## Características

- **Gestión de Tareas**: Crear, eliminar y completar tareas
- **Almacenamiento Local**: Usa localStorage para persistencia de datos
- **Enrutamiento**: Navegación entre sección de tareas y página "Acerca de"
- **Interfaz Moderna**: Utiliza FontAwesome para iconos
- **Formularios Reactivos**: Implementa validación de formularios con Angular Forms

## Tecnologías

- **Angular 13**: Framework principal
- **TypeScript**: Lenguaje de programación
- **RxJS**: Manejo de programación reactiva
- **FontAwesome**: Iconos
- **localStorage API**: Almacenamiento de datos en el cliente

## Estructura del Proyecto

```
src/
├── app/
│   ├── components/         # Componentes reutilizables
│   │   ├── header/        # Encabezado de la aplicación
│   │   ├── footer/        # Pie de página
│   │   ├── tasks/         # Lista de tareas
│   │   ├── tasks-item/    # Elemento individual de tarea
│   │   ├── add-task/      # Formulario para agregar tarea
│   │   ├── button/        # Botón reutilizable
│   │   ├── about/         # Página de información
│   │   ├── Task.ts        # Interfaz de Tarea
│   │   └── mock-tasks.ts  # Datos de ejemplo
│   ├── service/           # Servicios
│   │   ├── task.service.ts      # Servicio de gestión de tareas
│   │   └── ui-state.service.ts  # Servicio de estado UI
│   ├── app.component.*    # Componente raíz
│   └── app.module.ts      # Módulo principal
├── styles.css             # Estilos globales
└── index.html             # Archivo HTML principal
```

## Instalación

1. Clonar el repositorio:
```bash
git clone <repository-url>
cd Mi_Lista_de_Tareas
```

2. Instalar dependencias:
```bash
npm install
```

## Desarrollo

### Servidor de desarrollo

Ejecutar el servidor de desarrollo:
```bash
npm start
```

Acceder a la aplicación en `http://localhost:4200/`

### Servidor JSON (opcional)

Para usar un servidor JSON para desarrollo:
```bash
npm run server
```

El servidor estará disponible en `http://localhost:5000`

## Compilación

Compilar la aplicación para producción:
```bash
npm run build
```

Los artefactos se almacenarán en el directorio `dist/`.

## Testing

Ejecutar pruebas unitarias:
```bash
npm test
```

Las pruebas se ejecutan a través de [Karma](https://karma-runner.github.io).

## Docker

La aplicación incluye un `Dockerfile` para ejecutarse en un contenedor Docker:

```bash
docker build -t task-manager .
docker run -p 4200:4200 task-manager
```

También está incluido `docker-compose.yml` para orquestación de contenedores.

## Uso

1. **Ver Tareas**: La página principal muestra todas las tareas almacenadas
2. **Agregar Tarea**: Usa el formulario para agregar una nueva tarea
3. **Completar Tarea**: Haz clic en el recordatorio (bell icon) para marcar como completada
4. **Eliminar Tarea**: Haz clic en el botón de eliminar para remover una tarea
5. **Acerca de**: Navega a `/about` para ver información de la aplicación

## Licencia

Libre para usar y modificar.
