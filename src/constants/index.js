import {state, props, signal} from 'cerebral/tags';

export const parts = {
    chunks: 'chunks',
    translations: 'translations',
    comments: 'comments',
    activeChunkId: 'activeChunkId',
    activeTranslateId: 'activeTranslateId',
    draftText: 'draftText',
    draftId: '$draft',
    uuid: 'uuid',
    timestamp: 'timestamp'
};

export const signalNames = {
    init: 'init',
    chunkClicked: 'chunkClicked',
    commentChanged: 'commentChanged',
    commentSubmitted: 'commentSubmitted',
    translateClicked: 'translateClicked',
    translateChanged: 'translateChanged',
    translateBlurred: 'translateBlurred',
    voteUpClicked: 'voteUpClicked',
    voteDownClicked: 'voteDownClicked'
};

export const tags = {
    activeChunkId: state`${parts.activeChunkId}`,
    activeTranslateId: state`${parts.activeTranslateId}`,
    chunks: state`${parts.chunks}`,
    chunkIds: state`${parts.chunks}.*`,
    translations: state`${parts.translations}`,
    comments: state`${parts.comments}`,
    comment: state`${parts.comments}.${parts.draftId}`,
    draftText: state`${parts.translations}.${parts.draftId}.body`,
    draftCommentText: state`${parts.comments}.${parts.draftId}.body`,

    idProp: props`id`,
    uuidProp: props`${parts.uuid}`,
    timestamp: props`${parts.timestamp}`,
    draftProp: props`draft`,
    valueProp: props`value`,
    chunkIdProp: props`chunkId`,

    chunkText: state`${parts.chunks}.${props`id`}.body`,
    translation: state`${parts.translations}.${props`id`}`,
    newTranslation: state`${parts.translations}.${props`result.id`}`,
    translationRates: state`${parts.translations}.${props`id`}.rates`,
    translationIds: state`${parts.chunks}.${props`chunkId`}.${parts.translations}`,
    newComment: state`${parts.comments}.${props`${parts.uuid}`}`,

    chunkClicked: signal`${signalNames.chunkClicked}`,
    translateClicked: signal`${signalNames.translateClicked}`,
    translateChanged: signal`${signalNames.translateChanged}`,
    translateBlurred: signal`${signalNames.translateBlurred}`,
    commentChanged: signal`${signalNames.commentChanged}`,
    commentSubmitted: signal`${signalNames.commentSubmitted}`,
    voteUpClicked: signal`${signalNames.voteUpClicked}`,
    voteDownClicked: signal`${signalNames.voteDownClicked}`
};

export const tagFactories = {};
