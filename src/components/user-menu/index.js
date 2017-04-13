import React from 'react';

export default class UserMenu extends React.Component {
    render() {
        return (
            <a className='header__user'>
                <div className='header__avatar'></div>
                <p className='header__username'>Hvostik12</p>
            </a>
        );
    }
}
