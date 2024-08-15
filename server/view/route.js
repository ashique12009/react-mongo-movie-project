import { Router } from "express";
import signUpHandler from "../controller/userController.js";

const router = Router();

// Endpoints
router.post('/signup', signUpHandler);

export default router;