import Section, { ISection } from '../../models/section.model';

export const editSectionService = async (sectionId: string, sectionTitleId: string, sectionDetail: string, sectionImageId: string) => {
    try {
        const editedSection = await Section.updateOne({ sectionId }, {
            sectionTitleId: sectionTitleId,
            sectionDetail: sectionDetail,
            sectionImageId: sectionImageId
        })
        return editedSection;
    } catch (error) {
        console.error(error);
        throw new Error('An error occurred while trying to update the section.');
    }
}