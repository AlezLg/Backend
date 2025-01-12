import mongoose from "mongoose";

const Autos = new mongoose.Schema({
  id: { type: String, required: true, unique: true },
  auto: { type: String, required: true },
  marca: { type: String, required: true },
  descripcion: { type: String, required: true },
  imagen: { type: String, required: true },
  isHabilitado: { type: Boolean, default: true },
  autor: { type: mongoose.Schema.Types.ObjectId, ref: 'Usuario', required: true }

});

const Auto = mongoose.model("Auto", Autos); 

export default Auto;
