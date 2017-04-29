import React from 'react';
import '../styles/sidebar.less';
import SidebarControls from './sidebar-controls';
import CommentList from './comment-list';

function Sidebar() {
    return (
        <aside className='sidebar'>
            <SidebarControls />
            <CommentList />
        </aside>
    );
}

export default Sidebar;
