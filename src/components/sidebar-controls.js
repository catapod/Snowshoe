import React from 'react';
import '../styles/sidebar-controls.less';
import commentsWhite from '../assets/comments-white.svg';
import iconDictionary from '../assets/dictionary.svg';
import iconInfo from '../assets/info.svg';


function SidebarControls() {
    return (
        <div className='sidebar-controls'>
            <a
                className='sidebar-control sidebar-control--dictionary'
                dangerouslySetInnerHTML={{__html: iconDictionary}}
            />
            <a
                className='sidebar-control sidebar-control--comments sidebar-control--active'
                dangerouslySetInnerHTML={{__html: commentsWhite}}
            />
            <a className='sidebar-control sidebar-control--users' />
            <a
                className='sidebar-control sidebar-control--info'
                dangerouslySetInnerHTML={{__html: iconInfo}}
            />
        </div>
    );
}

export default SidebarControls;
