import {when, merge, set} from 'cerebral/operators';
import {tags, parts} from '../constants';

export const translateChanged = [
    merge(tags.translation, {
        body: tags.valueProp
    })
];

export const translateBlurred = [];

export const translateClicked = [
    // TODO: add user rules check for editing
    set(tags.activeTranslateId, tags.idProp),
    set(tags.activeChunkId, tags.chunkIdProp)
];

export const chunkClicked = [
    when(tags.activeChunkId, tags.idProp, (activeChunkId, chunkId) => activeChunkId !== chunkId), {
        true: [
            set(tags.activeChunkId, tags.idProp),
            set(tags.activeTranslateId, parts.draftId),
            set(tags.draftText, '')
        ],
        false: []
    }
];
