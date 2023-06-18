import { Model } from 'mongoose';
import { ICategory } from '../models/category.model';
import { IPublication } from '../models/publication.model';
import { ISection } from '../models/section.model';
import { ISectionImage } from '../models/sectionImage.model';
import { ISectionTitle } from '../models/sectionTitle.model';

export const collectionsNumber = async <T extends IPublication | ISection | ISectionImage | ICategory | ISectionTitle>(collection: Model<T>) => {
    return new Promise(resolve => {
        collection.countDocuments({}, (err: Error, count: Number) => {
            if (err) {
                console.error(err);
            } else {
                resolve(count)
            }
        });
    })
}