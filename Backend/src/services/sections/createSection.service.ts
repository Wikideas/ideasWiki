import Section from '../../models/section.model';

export const createSectionService = async (sectionTitleId: string, sectionDetail: string, sectionImageId: string) => {
    const sectionToInsert = new Section({
        sectionTitleId: sectionTitleId,
        sectionDetail: sectionDetail,
        sectionImageId: sectionImageId
    })
    try {
        const newSection = await sectionToInsert.save();
        return newSection._id;
    }
    catch (error) {
        throw new Error('An error occurred while trying to save the section');
    }
}