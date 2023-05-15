import express from 'express';
const Routes = express.Router();
import {GetCRUD , PostCRUD , PutCURD , DelCURD , GetFormCRUD} from '../controller/CRUD.js';

Routes.get('/get' , GetCRUD );
Routes.get('/getform', GetFormCRUD);
Routes.post('/post', PostCRUD);
Routes.put('/put' , PutCURD);
Routes.delete('/delete', DelCURD );

export default Routes 