import React from 'react';

export default class DocumentTitles extends React.Component {
    render() {
        return (
            <div className='content__titles'>
                <h1 className='content__title-origin'>Document name</h1>
                <h1 className='content__title-translate'>Название документа</h1>
            </div>
        );
    }
}
