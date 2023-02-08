import express, { Request, Response } from 'express'
import Publication from "../models/publication";

export const editPublication = (req: Request, res: Response) => {
    console.log('Insertando en collección')
    res.status(200).json({
        ok: "Modificar una publicación"
    })
} 