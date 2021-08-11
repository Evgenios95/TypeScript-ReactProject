import express from 'express'
import ProductsRoutes from './Products/ProductsRoutes.js'
import UsersRoutes from './Users/UserRoutes.js'
import cors from 'cors';

const app = express();
app.use(express.json());
app.use(cors());

//route for the products + custom
app.use('/products',ProductsRoutes);
//route for the users + custom
app.use('/users',UsersRoutes);

const PORT = 3000;
app.listen(PORT,console.log(`app is running on port ${PORT}!`));