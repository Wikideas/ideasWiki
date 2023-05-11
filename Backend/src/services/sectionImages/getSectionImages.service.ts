import SectionImage from "../../models/sectionImage";

export const getSectionImagesService = async () => {
    try {
        const categories = await SectionImage.find();
        return categories;
    } catch (error) {
        throw new Error('An error occurred while trying to get the section titles.');
    }
}