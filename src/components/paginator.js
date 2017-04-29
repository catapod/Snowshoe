import React from 'react';
import '../styles/paginator.less';


function Paginator() {
    return (
        <div className='paginator'>
            <a className='paginator__back'>Назад</a>
            <a className='paginator__item'>1</a>
            <div className='paginator__item  paginator__item--ellipsis'>...</div>
            <a className='paginator__item'>11</a>
            <a className='paginator__item'>12</a>
            <div className='paginator__item paginator__item--current'>13</div>
            <a className='paginator__item'>14</a>
            <a className='paginator__item'>15</a>
            <div className='paginator__item paginator__item--ellipsis'>...</div>
            <a className='paginator__item'>46</a>
            <a className='paginator__forward'>Вперед</a>
        </div>
    );
}

export default Paginator;
