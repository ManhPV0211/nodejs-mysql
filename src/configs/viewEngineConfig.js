import express from "express";

function viewEngineConfig(app) {
    app.set("view engine", "ejs");
    app.set("views", "src/views");
    app.use(express.static("src/public"));
}

export default viewEngineConfig;
