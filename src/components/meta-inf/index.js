import React from 'react';

export default class MetaInf extends React.Component {
    render() {
        return (
            <div className='meta-inf'>
                <div className='meta-inf__original'>
                    <p className='meta-inf__lang'>Английский</p>
                    <p className='meta-inf__count'>Всего: 518</p>
                </div>
                <div className='meta-inf__translate'>
                    <p className='meta-inf__lang'>Русский</p>
                    <p className='meta-inf__count'>Переведено: 184</p>
                </div>
            </div>
        );
    }
}
