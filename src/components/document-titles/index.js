import React from 'react';

export default class DocumentTitles extends React.Component {
    render() {
        return (
            <div className='document-titles'>
                <h1 className='document-titles__origin'>Document name</h1>
                <h1 className='document-titles__translate'>Название документа</h1>
            </div>
        );
    }
}
