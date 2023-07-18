import SectionImage from '../../models/sectionImage.model';

export const getSectionImagesService = async () => {
    try {
        const categories = await SectionImage.find({ active: true });
        return categories;
    } catch (error) {
        throw new Error('An error occurred while trying to get the section titles.');
    }
}