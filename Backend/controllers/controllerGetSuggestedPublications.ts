import { Response, Request } from "express";
import Publication from "../models/publication";
import { numb } from "../utils/countDocs";

export const getSuggestedPublications = async (req: Request, res: Response) => {
    const { numSuggestedPublicationsIn } = req.params
    const numPublicationsExist = await numb()
    let indexes: number[] = []

    const getIndexes = async () => {
        for (let i = 0; i < Number(numSuggestedPublicationsIn); i++) {
            let randomNumber = Math.floor(Math.random() * Number(numPublicationsExist))
            if (!indexes.includes(randomNumber)) {
                indexes.push(randomNumber)
            } else {
                while (indexes.includes(randomNumber)) {
                    randomNumber = Math.floor(Math.random() * Number(numPublicationsExist))
                }
                indexes.push(randomNumber)
            }
        }
        return indexes
    }
    let indexesObtained = await getIndexes()

    try {
        const suggestedPublications = await Publication.find({ num_Publication: { $in: indexesObtained } })
        res.status(200).json({
            suggestedPublications
        })
    } catch (error) {
        res.status(500).json({
            error: "An error has occurred on the server, please contact the administrator."
        })
    }
}