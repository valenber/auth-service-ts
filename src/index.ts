import dotenv from "dotenv";
import { api } from "./app";

dotenv.config();

const port = process.env.PORT || 3000;

function init() {
  api.listen(port, () => {
    console.log(`[server]: Server is running at http://localhost:${port}`);
  });
}

init();
