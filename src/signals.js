import {translateClicked, translateChanged, translateBlurred, chunkClicked} from './chains/translation';
import {signalNames} from './constants';

export default {
    [signalNames.chunkClicked]: chunkClicked,
    [signalNames.translateClicked]: translateClicked,
    [signalNames.translateChanged]: translateChanged,
    [signalNames.translateBlurred]: translateBlurred,
    [signalNames.voteUpClicked]: [],
    [signalNames.voteDownClicked]: []
};
