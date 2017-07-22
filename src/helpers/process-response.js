import {parts} from '../constants';
import {normalize, schema} from 'normalizr';

const comment = new schema.Entity(parts.comments, {}, {
    idAttribute: 'id',
    processStrategy: (entity, parent) => ({
        ...entity,
        parentId: parent.id
    })
});

const translation = new schema.Entity(parts.translations, {}, {
    idAttribute: 'id',
    processStrategy: (entity, parent) => ({
        ...entity,
        parentId: parent.id
    })
});

const chunk = new schema.Entity(parts.chunks, {
    [parts.translations]: [translation],
    [parts.comments]: [comment]
}, {idAttribute: 'id'});


const patchTranslation = ({rates, ...t}) => ({...t, rates: rates.data});
const patchResponse = res =>
    res.data.map(({translations, comments, ...rest}) => ({
        ...rest,
        translations: translations.data.map(patchTranslation),
        comments: comments.data,
    }));

export const normalizeChunkList = data => normalize(patchResponse(data), [chunk]);
export {patchTranslation};
