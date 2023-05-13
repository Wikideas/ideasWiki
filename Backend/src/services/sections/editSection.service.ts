import Section, { ISection } from "../../models/section";

export const editSectionService = async (id: string, section: ISection) => {
    try {
        const editedSection = await Section.updateOne({ _id: id }, {
            sectionTitleId: section.sectionTitleId,
            sectionDetail: section.sectionDetail,
            sectionImageId: section.sectionImageId
        })
        return editedSection;
    } catch (error) {
        console.error(error);
        throw new Error('An error occurred while trying to update the section.');
    }
}