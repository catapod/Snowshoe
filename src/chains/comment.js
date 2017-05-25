import {when, merge, set} from 'cerebral/operators';
import {tags, parts} from '../constants';
import uuid from 'uuid';

export const commentChanged = [
    merge(tags.comment, {
        body: tags.valueProp
    })
];

export const commentSubmitted = [
    when(tags.draftCommentText), {
        true: [
            () => ({[parts.uuid]: uuid(), [parts.timestamp]: Date.now()}),
            merge(tags.newComment, {
                comment_id: tags.uuidProp,
                body: tags.draftCommentText,
                parentId: tags.activeChunkId,
                created_at: tags.timestamp,
                commentator: {
                    nickname: 'Snowshoe'
                }
            }),
            set(tags.draftCommentText, '')
        ],
        false: []
    }

];
