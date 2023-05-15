import mongoose from "mongoose";

const crudSchema = new mongoose.Schema({
    crud:{
        type:String
    }

},{timeseries:true})

const CRUD = mongoose.model('crud',crudSchema)

export default CRUD