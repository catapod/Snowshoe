import React from 'react';

export default class UserMenu extends React.Component {
    render() {
        return (
            <a className='user-menu'>
                <div className='user-menu__avatar'></div>
                <p className='user-menu__username'>Hvostik12</p>
            </a>
        );
    }
}
