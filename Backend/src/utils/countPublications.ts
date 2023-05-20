import Publication from '../models/publication.model';

export const numberPublications = async () => {
    return new Promise(resolve => {
        Publication.countDocuments({}, (err: Error, count: Number) => {
            if (err) {
                console.error(err);
            } else {
                resolve(count)
            }
        });
    })
}