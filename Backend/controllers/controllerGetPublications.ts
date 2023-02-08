import express, { Request, Response } from 'express'
import Publication from "../models/publication";

export const getPublications = (req: Request, res: Response) => {
    console.log('Insertando en collección')
    res.status(200).json({
        ok: "Obtener publicaciones"
    })
}