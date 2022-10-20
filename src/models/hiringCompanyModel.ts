import mongoose from "mongoose";
import hiringCompanySchema from "../Schema/hiringCompanySchema";

export const hiringCompanyModel = mongoose.model(
  "HiringCompany",
  hiringCompanySchema
);