import jwt from "jsonwebtoken";

const JWT_ACCESS_SECRET = process.env.JWT_ACCESS_SECRET || "unaclavesecreta";

export const authMiddleware = (req, res, next) => {
    try {
        const authHeader = req.headers["authorization"];
        if (!authHeader) {
            return res.status(401).json({ status: "error", message: "No autorizado: token no proporcionado", data: {} });
        }

        // Extraer el token eliminando "Bearer "
        const token = authHeader.split(" ")[1];
        if (!token) {
            return res.status(401).json({ status: "error", message: "No autorizado: formato incorrecto", data: {} });
        }

        // Verificar el token
        const tokenData = jwt.verify(token, JWT_ACCESS_SECRET);
        if (!tokenData) {
            return res.status(401).json({ status: "error", message: "Token inválido o expirado", data: {} });
        }

        // Adjuntar los datos del token al objeto req (si es necesario)
        req.user = tokenData;
        next();
    } catch (error) {
        console.error(error);
        return res.status(401).json({ status: "error", message: "Error al procesar el token", data: {} });
    }
};
