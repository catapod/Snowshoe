import React from 'react';

export default class ControlButtons extends React.Component {
    render() {
        return (
            <div className='content__control-buttons'>
                <div className='content__command-key'>⌘</div>
                <div className='content__view-key content__view-key--active'></div>
            </div>
        );
    }
}
