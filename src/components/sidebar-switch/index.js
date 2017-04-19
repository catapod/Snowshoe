import React from 'react';

export default class SidebarSwitch extends React.Component {
    render() {
        return (
            <div className='sidebar-switch'>
                <a className='sidebar-switch__item sidebar-switch__item-dictionary'></a>
                <a className='sidebar-switch__item sidebar-switch__item-comments sidebar-switch__item--active'></a>
                <a className='sidebar-switch__item sidebar-switch__item-users'></a>
                <a className='sidebar-switch__item sidebar-switch__item-info'></a>
            </div>
        );
    }
}
