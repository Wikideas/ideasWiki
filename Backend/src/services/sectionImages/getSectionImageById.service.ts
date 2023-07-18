import SectionImage from '../../models/sectionImage.model';

export const getSectionImageByIdService = async (sectionImageId: string) => {
    try {
        const sectionImage = await SectionImage.findOne({ sectionImageId, active: true });
        return sectionImage;
    } catch (error) {
        console.error(error);
        throw new Error('An error occurred while trying to get the sectionImage.');
    }
}