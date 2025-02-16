import { body, param, query } from "express-validator";

export const validationPostBlog = [

    body("auto").isString().withMessage("el titulo debe ser un texto").isLength({min:1,max:256}).withMessage("el titulo debe tener entre 1 y 256 caracteres"),
    body("marca").isString().withMessage("la marca debe ser un texto").isLength({min:1,max:400}).withMessage("la marca tiene que tener entre 1 y 400 caracteres"),
    body("descripcion").isString().withMessage("la descripcion debe ser un texto").isLength({min:1,max:1000}).withMessage("la descripcion debe tener entre 1 y 1000 caracteres"),
    body("imagen").isString().withMessage("el link de la imagen debe ser un texto").isLength({min:1,max:100}).withMessage("el link de la imagen debe tener entre 1 y 100 caracteres"),
    body("autor").isMongoId().withMessage("el id del autor debe tener un formato valido de mongo id"),
]

export const validationIdBlog= [
    param("id").isUUID().withMessage("el id debe ser un UUID"),
]
