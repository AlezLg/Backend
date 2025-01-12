import Blog from "../model/ModelAuto.js"
import crypto from "crypto"


export const getBlogs = async () => {
    const blogs = await Blog.find({isHabilitado: true});
    return blogs
}

export const getBlog = async (id) => {
    const blog = await Blog.findOne({id:id});
    return blog
}

export const createBlog = async (auto,marca,descripcion,imagen,autor) => {
    const blog = await Blog.create({id:crypto.randomUUID(),auto,marca,descripcion,imagen,autor});
    return blog
}

export const updateBlog = async (id,auto,marca,descripcion,imagen) => {
    const blog = await Blog.findOneAndUpdate({id:id},{auto,marca,descripcion,imagen})
    return blog
}

export const deleteBlog = async (id) => {
    const blog = await Blog.findOneAndUpdate({id:id},{isHabilitado:false});
    return blog
}
