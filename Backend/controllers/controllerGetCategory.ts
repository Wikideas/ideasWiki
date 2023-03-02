import { Request, Response } from "express"

const categorys = ["IA", "Estructuras de datos", "Frameworks y librerias", "Lenguajes de programación",
    "Procesos de diseño y buenas prácticas en el diseño UX/UI", "Introducción a IT",
    "Testing", "Metodologías Agiles",
    "Desarrollo de video juegos", "Desing thinking"]

export const getCategory = (req: Request, res: Response) => {
    res.status(200).json({
        Categorias: categorys
    })
} 