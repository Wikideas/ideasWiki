import SectionTitle from '../../models/sectionTitle';
import { ISectionTitle } from '../../models/sectionTitle';

export const createSectionTitleService = async (sectionTitle: string) => {
    try {
        const existSectionTitle = await SectionTitle.findOne({ sectionTitle: sectionTitle })
        if (existSectionTitle) {
            throw new Error('The section could not be inserted because it already exists.')
        }
    } catch (error: any) {
        throw new Error(`${error.message}`)
    }
    const sectionTitleToInsert = new SectionTitle({ sectionTitle: sectionTitle })
    try {
        const savedsectionTitle = await sectionTitleToInsert.save()
        return savedsectionTitle
    } catch (error) {
        console.error(error)
        throw new Error('An error occurred while trying to save the sectionTitle')
    }
}