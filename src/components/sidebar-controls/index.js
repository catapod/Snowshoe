import React from 'react';

export default class SidebarControls extends React.Component {
    render() {
        return (
            <div className='sidebar-controls'>
                <a className='sidebar-controls__item sidebar-controls__dictionary'></a>
                <a className='sidebar-controls__item sidebar-controls__comments sidebar-controls__item--active'></a>
                <a className='sidebar-controls__item sidebar-controls__users'></a>
                <a className='sidebar-controls__item sidebar-controls__info'></a>
            </div>
        );
    }
}
