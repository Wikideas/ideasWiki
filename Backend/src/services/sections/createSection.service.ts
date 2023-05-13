import Section from '../../models/section';
import { ISection } from '../../models/section';

export const createSectionService = async (section: ISection) => {
    const sectionToInsert = new Section({
        sectionTitleId: section.sectionTitleId,
        sectionDetail: section.sectionDetail,
        sectionImageId: section.sectionImageId
    })
    try {
        const newSection = await sectionToInsert.save();
        return newSection._id;
    }
    catch (error) {
        throw new Error('An error occurred while trying to save the section');
    }
}