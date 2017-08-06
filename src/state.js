import {parts} from './constants';

export default {
    [parts.chunks]: {},
    [parts.translations]: {
        [parts.draftId]: {
            translator: {} //fixme replace with actual user
        }
    },
    [parts.comments]: {
        [parts.draftId]: {
            body: ''
        }
    },
    [parts.activeChunkId]: null,
    [parts.activeTranslateId]: null
};
