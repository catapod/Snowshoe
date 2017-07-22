import {init} from './chains';
import {
    translateClicked,
    translateChanged,
    translateBlurred,
    chunkClicked
} from './chains/translation';
import {signalNames} from './constants';
import {
    commentChanged,
    commentSubmitted
} from './chains/comment';

export default {
    [signalNames.init]: init,
    [signalNames.chunkClicked]: chunkClicked,
    [signalNames.commentChanged]: commentChanged,
    [signalNames.commentSubmitted]: commentSubmitted,
    [signalNames.translateClicked]: translateClicked,
    [signalNames.translateChanged]: translateChanged,
    [signalNames.translateBlurred]: translateBlurred,
    [signalNames.voteUpClicked]: [],
    [signalNames.voteDownClicked]: []
};
