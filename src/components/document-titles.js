import React from 'react';
import sn from 'class-names';
import '../styles/document-titles.less';


function DocumentTitles() {
    return (
        <div className={sn('document-titles')}>
            <h1 className={sn('document-titles__origin')}>Document name</h1>
            <h1 className={sn('document-titles__translate')}>Название документа</h1>
        </div>
    );
}

export default DocumentTitles;
