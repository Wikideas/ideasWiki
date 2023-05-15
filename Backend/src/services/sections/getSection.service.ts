import { ObjectId } from 'mongoose';
import Section from '../../models/section.model';

export const getSectionsService = async (sectionsIds: Array<ObjectId>) => {
    try {
        const sections = await Section.find({ _id: { $in: sectionsIds } });
        return sections;
    } catch (error) {
        throw new Error('An error occurred while trying to get the sections.');
    }
}