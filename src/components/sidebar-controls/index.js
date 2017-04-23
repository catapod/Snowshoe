import React from 'react';

export default class SidebarControls extends React.Component {
    render() {
        return (
            <div className='sidebar-controls'>
                <a className='sidebar-control sidebar-control__dictionary'></a>
                <a className='sidebar-control sidebar-control__comments sidebar-control--active'></a>
                <a className='sidebar-control sidebar-control__users'></a>
                <a className='sidebar-control sidebar-control__info'></a>
            </div>
        );
    }
}
