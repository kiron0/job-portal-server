import colors from "colors";
import "dotenv/config";
import { app } from "./app";
import dbConnect from "./utils/dbConnect";
import log from "./utils/logger";

const port: string | number = process.env.PORT || 5000;
const startServer = async (): Promise<void> => {
  try {
    app.listen(port, () => {
      log.info(colors.yellow.bold.italic(`Server is running on port ${port}`));
      dbConnect();
    });
  } catch (error) {
    log.info(colors.red.bold.italic((`Server error: ${error}`)));
  }
};
startServer();
