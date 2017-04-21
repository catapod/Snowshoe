import './static-base.less';
import React from 'react';

import NotificationBell from '../notification-bell';
import UserMenu from '../user-menu';
import DocumentTitles from '../document-titles';
import NavPanel from '../nav-panel';
import ControlButtons from '../control-buttons';
import Meta from '../meta';
import ChunkList from '../chunk-list';
import Paginator from '../paginator';
import SidebarControls from '../sidebar-controls';
import CommentsList from '../comments-list';


export default class StaticBase extends React.Component {
    render() {
        return (
            <div>
                <header className='header'>
                    <a href='#' className='header__logo'></a>
                    <UserMenu />
                    <NotificationBell />
                </header>
                <main className='content'>
                    <DocumentTitles />
                    <ControlButtons />
                    <NavPanel />
                    <Meta />
                    <ChunkList />
                    <Paginator />
                </main>
                <aside className='sidebar'>
                    <SidebarControls />
                    <CommentsList />
                </aside>
            </div>
        );
    }
}
