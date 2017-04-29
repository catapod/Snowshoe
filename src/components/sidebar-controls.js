import React from 'react';
import '../styles/sidebar-controls.less';


function SidebarControls() {
    return (
        <div className='sidebar-controls'>
            <a className='sidebar-control sidebar-control--dictionary' />
            <a className='sidebar-control sidebar-control--comments sidebar-control--active' />
            <a className='sidebar-control sidebar-control--users' />
            <a className='sidebar-control sidebar-control--info' />
        </div>
    );
}

export default SidebarControls;
