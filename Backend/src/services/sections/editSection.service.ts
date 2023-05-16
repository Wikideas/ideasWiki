import Section, { ISection } from '../../models/section.model';

export const editSectionService = async (id: string, sectionTitleId: string, sectionDetail: string, sectionImageId: string) => {
    try {
        const editedSection = await Section.updateOne({ _id: id }, {
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