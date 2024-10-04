import express from "express";
const router = express.Router();
import { allUser, login, userRegister } from "../controller/auth.controller.js";

router.post('/signup',userRegister);
router.post('/login',login);
router.get('/alluser',allUser);


export default router;