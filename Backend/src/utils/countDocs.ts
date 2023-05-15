import Publication from '../models/publication.model';

export const numb = async () => {
    return new Promise(resolve => {
        Publication.countDocuments({}, (err: Error, count: Number) => {
            if (err) {
                console.error(err);
            } else {
                resolve(count.toString())
            }
        });
    })
}