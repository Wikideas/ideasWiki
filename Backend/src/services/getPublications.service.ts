import Publication from "../models/publication";

export const getPublicationsService = async () => {
    try {
        const publications = await Publication.find();
        return publications;
    } catch (error) {
        throw new Error('An error occurred while trying to get the publications.');
    }
}