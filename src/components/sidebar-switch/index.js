import React from 'react';

export default class SidebarSwitch extends React.Component {
    render() {
        return (
            <div className='sidebar-switch'>
                <a className='sidebar-switch__item'></a>
                <a className='sidebar-switch__item sidebar-switch__item--active'></a>
                <a className='sidebar-switch__item'></a>
                <a className='sidebar-switch__item'></a>
            </div>
        );
    }
}
