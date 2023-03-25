import { Request, Response } from 'express'
import CategoryPublication from "../models/categoryPublication";

export const createCategory = (req: Request, res: Response) => {
    const { namecategory } = req.body

    const Category = new CategoryPublication({ nameCategory: namecategory })

    CategoryPublication.findOne({ nameCategory: namecategory }).then((data) => {
        if (data) {
            res.status(409).json({
                Conflict: "This category already exist"
            })
        } else {
            Category.save((error) => {
                if (error) {
                    console.log(error),
                        res.status(500).json({

                            Error: "Unexpected error occurred. Please contact to the admin"
                        })
                } else {
                    res.status(201).json({
                        ok: "Category saved successfully"
                    })
                }
            })
        }
    }).catch((error) => {
        throw new Error(error.message)
    })
}