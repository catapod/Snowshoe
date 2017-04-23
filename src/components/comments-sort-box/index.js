import './comments-sort-box.less';

import React from 'react';

export default class CommentsSortBox extends React.Component {
    render() {
        return (
            <div className='comments-sort-box comments-sort-box__droplink'>
                <div className='comments-sort-box__dropdown'>
                    <label className='comments-sort-box__label'>
                        <input type='radio' name='comments-sort'/> Сначала новые
                    </label>
                    <label className='comments-sort-box__label'>
                        <input type='radio' name='comments-sort'/> Сначала старые
                    </label>
                </div>
            </div>
        );
    }
}
