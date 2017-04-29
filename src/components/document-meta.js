import React from 'react';
import '../styles/document-meta.less';

function DocumentMeta() {
    return (
        <div className='document-meta'>
            <div className='document-meta__original'>
                <p className='document-meta__lang'>Английский</p>
                <p className='document-meta__count'>Всего: 518</p>
            </div>
            <div className='document-meta__translate'>
                <p className='document-meta__lang'>Русский</p>
                <p className='document-meta__count'>Переведено: 184</p>
            </div>
        </div>
    );
}

export default DocumentMeta;
