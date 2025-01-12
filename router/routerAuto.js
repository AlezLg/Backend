import express from "express";
import { getblogscontroller,getblogcontroller,createblogcontroller,updateblogcontroller,deleteblogcontroller } from "../controller/controllerAuto.js";
import { validationPostBlog, validationIdBlog } from "../validations/validationAuto.js";
import { validationMiddleware } from "../middleware/validationmiddleware.js";
import { authMiddleware } from "../middleware/authmiddleware.js";
const routerBlog = express.Router();

routerBlog.get("/",getblogscontroller)
routerBlog.get("/:id",validationIdBlog,validationMiddleware,getblogcontroller)
routerBlog.post("/",authMiddleware,validationPostBlog,validationMiddleware,createblogcontroller) 
routerBlog.put("/:id",validationPostBlog,validationIdBlog,validationMiddleware,updateblogcontroller)
routerBlog.delete("/:id",validationIdBlog,validationMiddleware,deleteblogcontroller)

export default routerBlog;