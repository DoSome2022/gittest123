import express from 'express';
const Routes = express.Router();
import {GetHome} from '../controller/Home.js';

Routes.get('/',GetHome);


export default Routes 