import './slice-list.less';

import { connect } from 'react-redux';

import SliceList from './slice-list';

export default connect(state => ({
    sliceIds: state.sliceIds,
    slices: state.slices,
}))(SliceList);
