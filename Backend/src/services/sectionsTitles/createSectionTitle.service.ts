import SectionTitle from '../../models/sectionTitle.model';
import { collectionsNumber } from '../../utils/countCollections';

export const createSectionTitleService = async (sectionTitle: string) => {
    const numberSectionTitle = await collectionsNumber(SectionTitle);
    try {
        const existSectionTitle = await SectionTitle.findOne({ sectionTitle: sectionTitle })
        if (existSectionTitle) {
            throw new Error('The section could not be inserted because it already exists.')
        }
    } catch (error: any) {
        throw new Error(`${error.message}`)
    }
    const sectionTitleToInsert = new SectionTitle({
        sectionTitleId: Number(numberSectionTitle) + 1,
        sectionTitle: sectionTitle,
        active: true
    })
    try {
        const savedsectionTitle = await sectionTitleToInsert.save()
        return savedsectionTitle
    } catch (error) {
        console.error(error)
        throw new Error('An error occurred while trying to save the sectionTitle')
    }
}