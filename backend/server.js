import express from 'express';
import data from './data.js';
import mongoose from 'mongoose';
import userRouter from './routers/userRouter.js';
import productRouter from './routers/productRouter.js';
import dotenv from 'dotenv';

dotenv.config();


const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));



mongoose.connect(process.env.MONGODB_URL || 'mongodb://localhost/E-commerce', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
 
});


app.get('/', (req, res) => {
  res.send('Server is ready');
});
app.use('/api/users', userRouter);
app.use('/api/products', productRouter);



app.use((err, req, res, next) => {
    res.status(500).send({ message: err.message });
  });
  
const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`Serve at http://localhost:${port}`);
});