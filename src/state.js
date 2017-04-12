import {parts} from './constants';
import {material, chunks, translations} from './data';

export default {
    [parts.material]: material,
    [parts.chunks]: chunks,
    [parts.translations]: translations,
    [parts.activeChunkId]: null,
    [parts.activeTranslateId]: null,
};