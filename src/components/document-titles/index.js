import React from 'react';

export default class DocumentTitles extends React.Component {
    render() {
        return (
            <div className='document-titles'>
                <h1 className='document-title__origin'>Document name</h1>
                <h1 className='document-title__translate'>Название документа</h1>
            </div>
        );
    }
}
