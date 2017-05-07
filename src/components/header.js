import React from 'react';
import sn from 'class-names';
import '../styles/header.less';
import logo from '../assets/logo.svg';
import NotificationBell from './notification-bell';
import UserMenu from './user-menu';

function Header() {
    return (
        <header className={sn('header')}>
            <a
                href='#'
                className={sn('header__logo')}
                dangerouslySetInnerHTML={{__html: logo}}
            />
            <UserMenu />
            <NotificationBell />
        </header>
    );
}

export default Header;
