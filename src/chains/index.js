import {httpGet} from '@cerebral/http/operators';
import {merge} from 'cerebral/operators';
import {props} from 'cerebral/tags';
import {normalizeChunkList} from '../helpers/process-response';
import {tags, parts} from '../constants';


export const init = [
    httpGet('/materials/1/chunks'),
    (context) => normalizeChunkList(context.props.result),
    merge(tags.chunks, props`entities.${parts.chunks}`),
    merge(tags.translations, props`entities.${parts.translations}`),
    merge(tags.comments, props`entities.${parts.comments}`)
];
