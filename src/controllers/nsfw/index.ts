import { Request, Response } from "express";
import { nsfwWords } from "@utils"

class Nsfw {
    public verification(req: Request, res: Response) {
        const { message } = req.body
        console.log(message)
        nsfwWords.forEach(element => {
            if (message?.includes(element)) return res.status(200).send("<h1> encontrei coisinhas </h1>").json({ message: "Foram encontrados elementos nsfw!" })
        });
        res.send("<center> ok </center>").json({ message: "Não foram encontrados elementos nsfw!"})
    }
}

export default new Nsfw()