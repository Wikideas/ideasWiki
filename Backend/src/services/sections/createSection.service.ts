import { ObjectId } from 'mongoose';
import Section from '../../models/section';
import { ISection } from '../../models/section';

export const createSectionService = async (sections: Array<ISection>) => {
    const idsInserted: Array<ObjectId> = [];

    const existDuplicatesTitles = (sections: Array<ISection>): boolean => {
        const values = sections.map(section => section.sectionTitleId);
        return values.some((value, index) => values.indexOf(value) !== index);
    }
    const existDuplicatesbyTitle = existDuplicatesTitles(sections);
    if (existDuplicatesbyTitle) {
        throw new Error('It is not possible to save the sections, there are duplicate section titles');
    } else {
        try {
            await Promise.all(
                sections.map(async (section: ISection) => {
                    const sectionToInsert = new Section({
                        sectionTitleId: section.sectionTitleId,
                        sectionDetail: section.sectionDetail,
                        sectionImageId: section.sectionImageId
                    })
                    const newSection = await sectionToInsert.save();
                    idsInserted.push(newSection._id);
                }
                ));
            return idsInserted;
        } catch (error) {
            throw new Error('An error occurred while trying to save the sections');
        }
    }
}