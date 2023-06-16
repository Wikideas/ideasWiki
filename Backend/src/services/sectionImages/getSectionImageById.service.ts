import SectionImage from '../../models/sectionImage.model';

export const getSectionImageByIdService = async (id: string) => {
    try {
        const sectionImage = await SectionImage.findById(id);
        return sectionImage;
    } catch (error) {
        console.error(error);
        throw new Error('An error occurred while trying to get the sectionImage.');
    }
}