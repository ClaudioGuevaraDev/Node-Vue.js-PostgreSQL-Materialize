## Node-Vue.js-PostgreSQL-Materialize

[Link para ver la demo de la aplicación](https://drive.google.com/file/d/1N8pFPWCbcfR_PYoiQqzoanspPXR4_J86/view?usp=sharing)

Aplicación para la administración de pinturas, las cuales poseen un título, una descripción una imagen y un autor. Además, La aplicación cuenta con un sistema de login y registro, donde los usuarios que se registren se les manda un correo para que puedan validar su cuenta.

Existen dos tipos de usuarios, los cuales son User y Painter. Las funcionalidades para cada uno son:

- **User**: Listar y comentar las pintoras. Los comentarios pueden editarlos y eliminarlos también.
- **Painter:** Listar, crear, actualizar y editar pinturas.

La aplicación cuenta con rutas protegidas y con sistema de autenticación y autorización medidado por tokens (jsonwebtoken).

### Tecnologías utilizadas

- **Backend:** Node.js
- **Frontend:** Vue.js
- **Base de Datos:** PostgreSQL
- **Framework CSS:** Materialize

### Requerimientos

- Tener Node.js instalado.
- Tener PostgreSQL instalado.

### Instalación

- Crear una base de datos *node_vue_materialize* y cargar el archivo *scripts/db.sql* en la base de datos.
- Tanto para la carpeta client y server hacer *npm install*

### Ejecución

- Para la carpeta server hacer un *npm run dev* y para la carpeta client un *npm run serve*.
