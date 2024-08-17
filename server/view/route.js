import { Router } from "express";
import { signUpHandler, loginHandler } from "../controller/userController.js";
import getAllMovies from "../controller/movieController.js";

const router = Router();

// Endpoints
router.post('/signup', signUpHandler);
router.post('/login', loginHandler);

router.get('/movies', getAllMovies);

export default router;