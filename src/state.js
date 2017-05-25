import {parts} from './constants';
import data from './data';
import {normalizeChunkList} from './helpers/process-response';

const {entities: {chunks, translations, comments}} = normalizeChunkList(data);

export default {
    [parts.chunks]: chunks,
    [parts.translations]: {
        [parts.draftId]: {
            translator: {} //fixme replace with actual user
        },
        ...translations
    },
    [parts.comments]: {
        [parts.draftId]: {
            body: ''
        },
        ...comments
    },
    [parts.activeChunkId]: null,
    [parts.activeTranslateId]: null
};
