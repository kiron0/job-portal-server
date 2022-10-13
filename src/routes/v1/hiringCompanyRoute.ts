import { Router } from "express";
import { hiringCompanyRoute } from "../../controllers/hiringCompanyController";
import { authorization } from "../../middlewares/authorization";
import { verifyToken } from "../../middlewares/verifyToken";
const router: Router = Router();

router
  .route("/")
  .post(verifyToken, authorization(["admin"]), hiringCompanyRoute.createHrCompany)
  .get(hiringCompanyRoute.getHrCompanies);

router.route("/:id").get(hiringCompanyRoute.getHrCompanyById);
export default router;