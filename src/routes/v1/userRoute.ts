import { Router } from "express";
import { userRouter } from "../../controllers/userController";

const router: Router = Router();

router.post("/signup", userRouter.signUp);

export default router;