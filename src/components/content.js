import React from 'react';
import ChunkList from './chunk-list';
import sn from 'class-names';
import '../styles/content.less';
import DocumentTitles from './document-titles';
import ControlButtons from './control-buttons';
import DocumentNavigation from './document-navigation';
import DocumentMeta from './document-meta';
import Paginator from './paginator';


function Content() {
    return (
        <main className={sn('content')}>
            <DocumentTitles />
            <ControlButtons />
            <DocumentNavigation />
            <DocumentMeta />
            <ChunkList />
            <Paginator />
        </main>
    );
}

export default Content;