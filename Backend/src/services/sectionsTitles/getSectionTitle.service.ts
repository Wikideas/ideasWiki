import SectionTitle from '../../models/sectionTitle.model';

export const getSectionTitlesService = async () => {
    try {
        const categories = await SectionTitle.find({ active: true });
        return categories;
    } catch (error) {
        throw new Error('An error occurred while trying to get the section titles.');
    }
}