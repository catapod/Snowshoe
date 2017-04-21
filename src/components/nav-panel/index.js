import React from 'react';
import '../../common/styles/drop-menu.less';

export default class NavPanel extends React.Component {
    render() {
        return (
            <div className='nav-panel'>
                <div className='nav-panel__left'></div>
                <div className='nav-panel__more drop-menu__link'>
                    ···
                    <div className='nav-panel__drop drop-menu__menu'>
                        <a href='#' className='nav-panel__link'>К моему последнему переводу</a>
                        <a href='#' className='nav-panel__link'>К последнему переводу</a>
                        <a href='#' className='nav-panel__link'>К первому непереведенному</a>
                        <p className='nav-panel__goto'>Перейти на страницу</p>
                        <p className='nav-panel__counter'>25</p>
                        <input className='nav-panel__range' type='range' />
                        <button className='nav-panel__button'>Перейти</button>
                    </div>
                </div>
                <div className='nav-panel__right'></div>
            </div>
        );
    }
}
