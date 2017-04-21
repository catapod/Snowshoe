import './static-base.less';
import React from 'react';

import NotifBell from '../notif-bell';
import UserMenu from '../user-menu';
import DocumentTitles from '../document-titles';
import NavButtons from '../nav-buttons';
import ControlButtons from '../control-buttons';
import MetaInf from '../meta-inf';
import ChunkList from '../chunk-list';
import Paginator from '../paginator';
import SidebarSwitch from '../sidebar-switch';
import CommentsList from '../comments-list';


export default class StaticBase extends React.Component {
    render() {
        return (
            <div>
                <header className='header'>
                    <a href='#' className='header__logo'></a>
                    <UserMenu />
                    <NotifBell />
                </header>
                <main className='content'>
                    <DocumentTitles />
                    <ControlButtons />
                    <NavButtons />
                    <MetaInf />
                    <ChunkList />
                    <Paginator />
                </main>
                <aside className='sidebar'>
                    <SidebarSwitch />
                    <CommentsList />
                </aside>
            </div>
        );
    }
}
