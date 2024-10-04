import express from 'express';
import dotenv from 'dotenv';
import connectDB from './model/db.js';  // Import the database connection function
import cors from 'cors'
dotenv.config();  // Load environment variables
import bodyparser from 'body-parser';
import userRouter from './router/auth.routes.js';
import productRouter from './router/product.routes.js'
const app = express();
const port = process.env.PORT 

// Connect to the database
connectDB();

app.use(bodyparser.json());
app.use(cors());
app.use('/auth',userRouter);
app.use('/pro',productRouter);

// Start the server
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
