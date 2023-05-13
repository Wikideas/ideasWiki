import Section from '../../models/section';

export const getSectionByIdService = async (id: string) => {
    try {
        const section = await Section.findById(id);
        return section;
    } catch (error) {
        throw new Error('An error occurred while trying to get the section.');
    }
}