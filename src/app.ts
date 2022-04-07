import express, { application } from "express";
import dotenv from "dotenv"
import cors from "cors"
import routes from "@routes"

class App {
    public express = application

    public constructor() {
        this.express = express()
        this.middlewares()
        this.routes()
    }
    public middlewares(): void {
        dotenv.config();
        this.express.use(express.json());
        this.express.use(cors());
    }
    private routes(): void {
        this.express.use(routes)
    }
}

export default new App().express