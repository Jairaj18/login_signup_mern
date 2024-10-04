import express from "express";
const router = express.Router();
import {ensureAuthenticated} from '../middleware/auth.js'
// import {productSchema} from "../model/product.model";
import { createProduct } from "../controller/product.controller.js";
router.post('/product',ensureAuthenticated,createProduct);



export default router;