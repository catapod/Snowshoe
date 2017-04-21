import React from 'react';

export default class Meta extends React.Component {
    render() {
        return (
            <div className='meta'>
                <div className='meta__original'>
                    <p className='meta__lang'>Английский</p>
                    <p className='meta__count'>Всего: 518</p>
                </div>
                <div className='meta__translate'>
                    <p className='meta__lang'>Русский</p>
                    <p className='meta__count'>Переведено: 184</p>
                </div>
            </div>
        );
    }
}
