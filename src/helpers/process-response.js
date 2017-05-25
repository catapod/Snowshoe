import {parts} from '../constants';
import {normalize, schema} from 'normalizr';

const comment = new schema.Entity(parts.comments, {}, {
    idAttribute: 'comment_id',
    processStrategy: (entity, parent) => ({
        ...entity,
        parentId: parent.chunk_id
    })
});

const translation = new schema.Entity(parts.translations, {}, {
    idAttribute: 'translation_id',
    processStrategy: (entity, parent) => ({
        ...entity,
        parentId: parent.chunk_id
    })
});

const chunk = new schema.Entity(parts.chunks, {
    [parts.translations]: [translation],
    [parts.comments]: [comment]
}, {idAttribute: 'chunk_id'});

export const normalizeChunkList = data => normalize(data, [chunk]);
