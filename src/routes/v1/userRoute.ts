import { Router } from "express";
import { userRouter } from "../../controllers/userController";
import { authorization } from "../../middlewares/authorization";
import { verifyToken } from "../../middlewares/verifyToken";

const router: Router = Router();

router.post("/signup", userRouter.signUp);
router.post("/login", userRouter.login);
router.get("/user/confirm", userRouter.confirmUser);
router.get("/users/me", verifyToken, userRouter.getSingleUser);

router
  .route("/users/:userId")
  .get(verifyToken, authorization(["admin"]), userRouter.getUserById)
  .patch(verifyToken, authorization(["admin"]), userRouter.makeUserToHr);

router.route("/user/:userId").patch(verifyToken, userRouter.updateUserById);

router.get(
  "/users/all",
  verifyToken,
  authorization(["admin"]),
  userRouter.getAllUsers
);

router.get(
  "/users/hrs",
  verifyToken,
  authorization(["admin", "hr"]),
  userRouter.getHrList
);

export default router;
