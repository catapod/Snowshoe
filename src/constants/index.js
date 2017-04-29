import {state, props, signal} from 'cerebral/tags';

export const parts = {
    chunks: 'chunks',
    translations: 'translations',
    comments: 'comments',
    activeChunkId: 'activeChunkId',
    activeTranslateId: 'activeTranslateId',
    draftText: 'draftText',
    draftId: '$draft'
};

export const signalNames = {
    chunkClicked: 'chunkClicked',
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
    draftText: state`${parts.translations}.${parts.draftId}.body`,

    idProp: props`id`,
    draftProp: props`draft`,
    valueProp: props`value`,
    chunkIdProp: props`chunkId`,

    chunkText: state`${parts.chunks}.${props`id`}.body`,
    translation: state`${parts.translations}.${props`id`}`,
    translationRates: state`${parts.translations}.${props`id`}.rates`,
    translationIds: state`${parts.chunks}.${props`chunkId`}.${parts.translations}`,

    chunkClicked: signal`${signalNames.chunkClicked}`,
    translateClicked: signal`${signalNames.translateClicked}`,
    translateChanged: signal`${signalNames.translateChanged}`,
    translateBlurred: signal`${signalNames.translateBlurred}`,
    voteUpClicked: signal`${signalNames.voteUpClicked}`,
    voteDownClicked: signal`${signalNames.voteDownClicked}`
};

export const tagFactories = {};
