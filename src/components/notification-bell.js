import React from 'react';
import '../styles/notification-bell.less';
import sn from 'class-names';
import bell from '../assets/bell.svg';


function NotificationBell() {
    return (
        <a className={sn('notification-bell')} dangerouslySetInnerHTML={{__html: bell}} />
    );
}

export default NotificationBell;
