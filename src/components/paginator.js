import React from 'react';
import sn from 'class-names';
import '../styles/paginator.less';
import arrow from '../assets/arrow.svg';


function Paginator() {
    return (
        <div className='paginator'>
            <a className='paginator__back'>
                <i className={sn('paginator__back-icon')} dangerouslySetInnerHTML={{__html: arrow}} />
                Назад
            </a>
            <a className='paginator__item'>1</a>
            <div className='paginator__item  paginator__item--ellipsis'>...</div>
            <a className='paginator__item'>11</a>
            <a className='paginator__item'>12</a>
            <div className='paginator__item paginator__item--current'>13</div>
            <a className='paginator__item'>14</a>
            <a className='paginator__item'>15</a>
            <div className='paginator__item paginator__item--ellipsis'>...</div>
            <a className='paginator__item'>46</a>
            <a className='paginator__forward'>
                Вперед
                <i className={sn('paginator__forward-icon')} dangerouslySetInnerHTML={{__html: arrow}} />
            </a>
        </div>
    );
}

export default Paginator;
