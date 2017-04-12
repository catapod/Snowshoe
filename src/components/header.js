import React from 'react';
import sn from 'class-names';
import '../styles/header.less';
import NotificationBell from './notification-bell';
import UserMenu from './user-menu';

function Header() {
    return (
        <header className={sn('header')}>
            <a href='#' className={sn('header__logo')} />
            <UserMenu />
            <NotificationBell />
        </header>
    );
}

export default Header;