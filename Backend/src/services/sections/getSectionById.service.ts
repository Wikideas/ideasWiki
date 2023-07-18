import Section from '../../models/section.model';

export const getSectionByIdService = async (sectionId: string) => {
    try {
        const section = await Section.findOne({ sectionId, active: true });
        return section;
    } catch (error) {
        throw new Error('An error occurred while trying to get the section.');
    }
}