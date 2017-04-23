import React from 'react';

export default class SidebarControls extends React.Component {
    render() {
        return (
            <div className='sidebar-controls'>
                <a className='sidebar-control sidebar-control--dictionary'></a>
                <a className='sidebar-control sidebar-control--comments sidebar-control--active'></a>
                <a className='sidebar-control sidebar-control--users'></a>
                <a className='sidebar-control sidebar-control--info'></a>
            </div>
        );
    }
}
