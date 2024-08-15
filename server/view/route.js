import { Router } from "express";
import { signUpHandler, loginHandler } from "../controller/userController.js";

const router = Router();

// Endpoints
router.post('/signup', signUpHandler);
router.post('/login', loginHandler);

export default router;