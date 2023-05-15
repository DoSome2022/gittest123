import CRUD from '../Model/CRUD.js';

export const GetCRUD = (req,res)=>{
    res.render('CRUD')
}

export const GetFormCRUD = (req ,res)=>{
    res.render('form')
}

export const PostCRUD = async(req,res)=>{
    const {crud } = req.body;
    console.log(crud)
    const newCRUD =  new CRUD({
        crud: crud
    })
    const saveCRUD = await newCRUD.save()
    res.send(saveCRUD)
}

export const PutCURD = (req,res)=>{

}

export const DelCURD = (req,res)=>{

}