import React from 'react';
import '../styles/sidebar-controls.less';
import iconSidebarComments from '../assets/sidebar-comments.svg';
import iconSidebarDictionary from '../assets/sidebar-dictionary.svg';
import iconSidebarInfo from '../assets/sidebar-info.svg';
import iconSidebarUsers from '../assets/sidebar-users.svg';


function SidebarControls() {
    return (
        <div className='sidebar-controls'>
            <a
                className='sidebar-control sidebar-control--dictionary'
                dangerouslySetInnerHTML={{__html: iconSidebarDictionary}}
            />
            <a
                className='sidebar-control sidebar-control--comments sidebar-control--active'
                dangerouslySetInnerHTML={{__html: iconSidebarComments}}
            />
            <a
                className='sidebar-control sidebar-control--users'
                dangerouslySetInnerHTML={{__html: iconSidebarUsers}}
            />
            <a
                className='sidebar-control sidebar-control--info'
                dangerouslySetInnerHTML={{__html: iconSidebarInfo}}
            />
        </div>
    );
}

export default SidebarControls;
