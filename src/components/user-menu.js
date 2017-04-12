import React from 'react';
import sn from 'class-names';
import '../styles/user-menu.less';

function UserMenu() {
    return (
        <a className={sn('user-menu')}>
            <div className={sn('user-menu__avatar')} />
            <p className={sn('user-menu__username')} >Hvostik12</p>
        </a>
    );
}

export default UserMenu;
