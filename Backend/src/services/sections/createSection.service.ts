import Section from '../../models/section.model';
import { collectionsNumber } from '../../utils/countCollections';

export const createSectionService = async (sectionTitleId: string, sectionDetail: string, sectionImageId: string) => {
    const numberSection = await collectionsNumber(Section);

    const sectionToInsert = new Section({
        sectionId: Number(numberSection) + 1,
        sectionTitleId: sectionTitleId,
        sectionDetail: sectionDetail,
        sectionImageId: sectionImageId,
        active: true
    })
    try {
        const newSection = await sectionToInsert.save();
        return newSection.sectionId;
    }
    catch (error) {
        throw new Error('An error occurred while trying to save the section');
    }
}