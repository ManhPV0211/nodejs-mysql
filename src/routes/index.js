import siteRoutes from "./sites.js";

function initWebRoutes(app) {
    app.use("/", siteRoutes);
}

export default initWebRoutes;
