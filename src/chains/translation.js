import {when, merge, set, push, debounce} from 'cerebral/operators';
import {httpPost, httpPut} from '@cerebral/http/operators';
import {tags, parts} from '../constants';
import {string, props, state} from 'cerebral/tags';
import {patchTranslation} from '../helpers/process-response';


const updateUrl = string`/materials/1/chunks/${tags.activeChunkId}/translations/${tags.idProp}`;
const createUrl = string`/materials/1/chunks/${tags.activeChunkId}/translations`;
const activeChunkTranslations = state`${parts.chunks}.${tags.activeChunkId}.${parts.translations}`;
const newIdTag = props`newId`;

export const translateChanged = [
    merge(tags.translation, {
        body: tags.valueProp
    }),
    debounce(500), {
        continue: [
            when(tags.idProp, (translateId) => translateId !== parts.draftId), {
                true: [
                    httpPut(updateUrl, {body: tags.valueProp})
                ],
                false: []
            }
        ],
        discard: []
    }
];

export const translateBlurred = [
    when(tags.idProp, (translateId) => translateId === parts.draftId), {
        true: [
            httpPost(createUrl, {
                body: tags.draftText,
                translator_id: 1
            }),
            (context) => ({
                newId: context.props.result.id,
                newTranslation: {
                    ...patchTranslation(context.props.result),
                    parentId: context.resolve.value(tags.activeChunkId)
                }
            }),
            set(tags.newTranslation, props`newTranslation`),
            push(activeChunkTranslations, newIdTag),
            set(tags.draftText, '')
        ],
        false: []
    }
];

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
