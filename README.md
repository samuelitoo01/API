# Sistema de Gestión de Usuarios

![Node.js](https://img.shields.io/badge/Node.js-18+-green.svg)
![Express](https://img.shields.io/badge/Express-5.2-blue.svg)
![MySQL](https://img.shields.io/badge/MySQL-8.0-orange.svg)
![License](https://img.shields.io/badge/License-ISC-yellow.svg)

Sistema web completo para la gestión de usuarios desarrollado con una arquitectura por capas. Permite realizar operaciones CRUD (Crear, Leer, Actualizar, Eliminar) sobre una base de datos MySQL, con una interfaz de usuario moderna y una API REST robusta.

## 📋 Tabla de Contenidos

- [Características](#-características)
- [Tecnologías](#-tecnologías)
- [Requisitos Previos](#-requisitos-previos)
- [Instalación](#-instalación)
- [Configuración](#-configuración)
- [Uso](#-uso)
- [Estructura del Proyecto](#-estructura-del-proyecto)
- [API Endpoints](#-api-endpoints)
- [Contribuidores](#-contribuidores)

## ✨ Características

- **CRUD Completo**: Crear, leer, actualizar y eliminar usuarios
- **Arquitectura por Capas**: Separación clara entre presentación, lógica de negocio y acceso a datos
- **API REST**: Endpoints bien estructurados y documentados
- **Interfaz Moderna**: Diseño responsive con TailwindCSS
- **Validación de Datos**: Validación tanto en frontend como en backend
- **Manejo de Errores**: Gestión adecuada de errores y respuestas HTTP apropiadas
- **Base de Datos MySQL**: Almacenamiento persistente y confiable

## 🛠 Tecnologías

### Backend
- **Node.js** - Entorno de ejecución JavaScript
- **Express.js 5.2** - Framework web para Node.js
- **MySQL2** - Cliente MySQL para Node.js
- **CORS** - Middleware para habilitar CORS
- **Dotenv** - Gestión de variables de entorno
- **Nodemon** - Herramienta de desarrollo para recarga automática

### Frontend
- **HTML5** - Estructura semántica
- **CSS3** - Estilos personalizados
- **JavaScript (ES6+)** - Lógica del cliente
- **TailwindCSS** - Framework CSS utility-first

## 📦 Requisitos Previos

Antes de comenzar, asegúrate de tener instalado:

- **Node.js** (versión 18 o superior)
- **npm** (incluido con Node.js)
- **MySQL** (versión 8.0 o superior)
- **Git** (opcional, para clonar el repositorio)

## 🚀 Instalación

1. **Clona el repositorio** (o descarga el proyecto):
```bash
git clone <url-del-repositorio>
cd API
```

2. **Instala las dependencias del backend**:
```bash
cd Backend
npm install
```

3. **Configura la base de datos MySQL**:
   - Crea una base de datos en MySQL
   - Ejemplo: `CREATE DATABASE gestion_usuarios;`

## ⚙️ Configuración

1. **Configura las variables de entorno**:
   - En el directorio `Backend/`, crea un archivo `.env` con la siguiente estructura:
```env
HOST=localhost
USER_DB=tu_usuario_mysql
PASSWORD=tu_contraseña_mysql
DATABASE=nombre_de_tu_base_de_datos
PORT=3000
```

2. **Crea la tabla de usuarios en MySQL**:
```sql
CREATE TABLE usuarios (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nombre VARCHAR(100) NOT NULL,
    correo VARCHAR(100) NOT NULL UNIQUE,
    estado ENUM('activo', 'inactivo') DEFAULT 'activo',
    fecha_creacion TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    fecha_actualizacion TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);
```

## 💻 Uso

### Iniciar el servidor backend

Desde el directorio `Backend/`:

```bash
# Modo desarrollo (con recarga automática)
npm run dev

# O modo producción
node main.js
```

El servidor estará corriendo en `http://localhost:3000` (o el puerto configurado en `.env`).

### Iniciar el frontend

Abre el archivo `Frontend/index.html` en tu navegador web, o utiliza un servidor local:

```bash
# Usando Python
cd Frontend
python -m http.server 8080

# Usando Node.js http-server
npx http-server -p 8080
```

Luego accede a `http://localhost:8080` en tu navegador.

## 📁 Estructura del Proyecto

```
API/
├── Backend/
│   ├── config/
│   │   └── bd.js              # Configuración de conexión a MySQL
│   ├── controllers/
│   │   └── user.controller.js # Lógica de negocio de usuarios
│   ├── models/
│   │   └── user.models.js     # Modelos y consultas a la base de datos
│   ├── routes/
│   │   └── user.routes.js     # Definición de rutas de la API
│   ├── main.js                # Punto de entrada de la aplicación
│   ├── server.js              # Configuración del servidor Express
│   ├── package.json           # Dependencias del proyecto
│   └── .env                   # Variables de entorno (no versionado)
│
├── Frontend/
│   ├── js/
│   │   ├── main.js            # Lógica principal del frontend
│   │   └── ui.js              # Funciones de interfaz de usuario
│   ├── layout/
│   │   └── app.js             # Componente de layout
│   ├── styles/
│   │   └── styles.css         # Estilos personalizados
│   └── index.html             # Página principal
│
└── README.md                  # Este archivo
```

## 🔌 API Endpoints

Base URL: `http://localhost:3000/usuarios`

### Obtener todos los usuarios
```http
GET /usuarios/obtener
```

**Respuesta exitosa (200)**:
```json
[
  {
    "id": 1,
    "nombre": "Juan Pérez",
    "correo": "juan@example.com",
    "estado": "activo",
    "fecha_creacion": "2024-01-01T00:00:00.000Z",
    "fecha_actualizacion": "2024-01-01T00:00:00.000Z"
  }
]
```

### Crear un nuevo usuario
```http
POST /usuarios/obtener
Content-Type: application/json
```

**Body**:
```json
{
  "nombre": "Juan Pérez",
  "correo": "juan@example.com"
}
```

**Respuesta exitosa (201)**:
```json
{
  "message": "Usuario creado correctamente",
  "id": 1
}
```

**Respuesta de error (400)**:
```json
{
  "message": "Todos los campos son obligatorios"
}
```

### Actualizar un usuario
```http
PUT /usuarios/obtener/:id
Content-Type: application/json
```

**Body**:
```json
{
  "nombre": "Juan Pérez Actualizado",
  "correo": "juan.nuevo@example.com"
}
```

**Respuesta exitosa (200)**:
```json
{
  "ok": true,
  "mensaje": "Usuario actualizado correctamente"
}
```

**Respuesta de error (404)**:
```json
{
  "ok": false,
  "mensaje": "Usuario no encontrado"
}
```

### Eliminar un usuario
```http
DELETE /usuarios/obtener/:id
```

**Respuesta exitosa (200)**:
```json
{
  "ok": true,
  "mensaje": "Usuario eliminado correctamente"
}
```

**Respuesta de error (404)**:
```json
{
  "ok": false,
  "mensaje": "Usuario no encontrado"
}
```

## 👥 Contribuidores

- **[Samuel Sarmiento](https://github.com/samuelitoo01)** - Desarrollo y diseño
- **[Jose Prieto](https://github.com/Presione-Enter-by-Jose-Prieto)** - Desarrollo y diseño

## 📝 Notas

- Este proyecto sigue una arquitectura por capas que separa las responsabilidades entre modelos, controladores y rutas.
- La validación de datos se realiza tanto en el frontend como en el backend para mayor seguridad.
- El proyecto utiliza ES6 modules (`type: "module"` en package.json).
- Asegúrate de mantener tu archivo `.env` seguro y nunca lo subas a control de versiones.

## 📄 Licencia

Este proyecto está bajo la Licencia ISC.

---

⭐ Si este proyecto te resulta útil, considera darle una estrella en GitHub.
