import './static-base.less';
import React from 'react';

import NotifBell from '../notif-bell';
import UserMenu from '../user-menu';
import DocumentTitles from '../document-titles';
import NavButtons from '../nav-buttons';
import ControlButtons from '../control-buttons';
import MetaInf from '../meta-inf';
import SliceList from '../slice-list';


export default class StaticBase extends React.Component {
    render() {
        return (
            <div>
                <header className='header'>
                    <a className='header__logo'></a>
                    <UserMenu />
                    <NotifBell />
                </header>
                <main className='content'>
                    <DocumentTitles />
                    <ControlButtons />
                    <NavButtons />
                    <MetaInf />
                    <SliceList />
                </main>
                <aside className='sidebar'></aside>
            </div>
        );
    }
}
