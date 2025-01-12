import { validationResult } from "express-validator";
export const validationMiddleware = (req, res, next) => {
    const error = validationResult(req);
    if (!error.isEmpty()) {
      console.log(error)
      return res.status(400).json({status: "error", menssage: "faltan datos", data:{}, errors: error.array()});
    }
    next();
}