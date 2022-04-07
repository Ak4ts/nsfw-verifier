import express from "express"
import Nsfw from "@controllers/nsfw"

const routes = express.Router()

routes.get("/verify", Nsfw.verification)

export default routes