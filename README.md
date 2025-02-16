# **Proyecto de Programación Web - API RESTful de Blogs de Autos**

## **Descripción**
Este proyecto es una API RESTful desarrollada con Node.js y Express que permite realizar operaciones CRUD sobre la entidad principal "Blogs". El proyecto incluye autenticación de usuarios mediante JWT, validación de datos y manejo centralizado de errores. Es parte del desarrollo de un sistema completo para la gestión de blogs de autos.

---

## **Funcionalidades Principales**
1. **Autenticación**  
   - Implementación de autenticación basada en tokens JWT.
   - Permite a los usuarios iniciar sesión y mantener su sesión segura.

2. **Módulo de ABMC (Alta, Baja, Modificación, Consulta)**  
   - Operaciones CRUD sobre la entidad "Blogs".
   - Control de permisos para usuarios autenticados.

3. **Validación**  
   - Validación de datos en los endpoints usando librerías como `Joi` o `Validator`.

4. **Manejo de Errores**  
   - Sistema centralizado para el manejo de errores en toda la API.

---

## **Tecnologías Utilizadas**
- **Node.js**: Plataforma de desarrollo para construir la API.
- **Express.js**: Framework para construir los endpoints y manejar rutas.
- **Mongoose**: Conexión y manejo de la base de datos MongoDB.
- **JWT (Json Web Tokens)**: Para autenticación de usuarios.
- **Git**: Para el control de versiones y colaboración.

---
## **Instrucciones de Uso**
### **Clonar el Repositorio**

git clone https://github.com/AlezLg/Backend.git

---
### **Instalar las Dependencias**
    npm install

---

### **Configurar Variables de Entorno**
    MONGO_URI=<URL_de_tu_base_de_datos>
    JWT_SECRET=<clave_secreta_para_tokens>
    PORT=<puerto_de_tu_servidor>

### **Iniciar el Servidor de Desarrollo**
    npm run dev
