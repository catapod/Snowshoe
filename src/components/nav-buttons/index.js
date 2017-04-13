import React from 'react';

export default class NavButtons extends React.Component {
    render() {
        return (
            <div className='nav-panel'>
                <div className='nav-panel__left'></div>
                <div className='nav-panel__more'>···</div>
                <div className='nav-panel__right'></div>
            </div>
        );
    }
}
