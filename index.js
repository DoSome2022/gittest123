import express from 'express';
const app = express();
import methodOverride from 'method-override';
import mongoose from 'mongoose';

//CRUD
//C = 創立 post()
//R = 睇 get()
//U = 更新 put()
//D = 刪除 del()
//DB
const connect = async()=>{
    try {
        await mongoose.connect('mongodb://localhost/crud')
        console.log('db is connect')        
    } catch (error) {
        throw error
    }
}


// 中間件
app.set('view engine' , 'ejs');
app.use(express.json());
app.use(express.urlencoded({extended:false}));
app.use(methodOverride('_method'));

// routes
import CRUDRoutes from './routes/CRUD.js';
import HomeRoutes from './routes/Home.js';
app.use('/crud', CRUDRoutes);
app.use('/',HomeRoutes);




app.listen('3000', 
()=>{
    connect();
   console.log('server 3000') 
}
)