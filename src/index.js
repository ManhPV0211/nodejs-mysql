import express from "express";
import dotenv from "dotenv";

import initWebRoutes from "./routes/index.js";
import viewEngineConfig from "./configs/viewEngineConfig.js";

dotenv.config();

const PORT = process.env.PORT;

const app = express();

viewEngineConfig(app);

initWebRoutes(app);

app.listen(PORT, () => {
    console.log(`Server is running on PORT ${PORT}`);
});
