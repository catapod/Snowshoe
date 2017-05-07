import React from 'react';
import '../styles/document-navigation.less';
import arrow from '../assets/arrow.svg';


function DocumentNavigation() {
    return (
        <div className='document-navigation'>
            <div
                className='document-navigation__button document-navigation__button--left'
                dangerouslySetInnerHTML={{__html: arrow}}
            />
            <div className='document-navigation__button document-navigation__button--more document-navigation__droplink'>
                ···
                <div className='document-navigation__dropdown'>
                    <a href='#' className='document-navigation__link'>К моему последнему переводу</a>
                    <a href='#' className='document-navigation__link'>К последнему переводу</a>
                    <a href='#' className='document-navigation__link'>К первому непереведенному</a>
                    <p className='document-navigation__goto'>Перейти на страницу</p>
                    <p className='document-navigation__counter'>25</p>
                    <input className='document-navigation__range' type='range' />
                    <button className='document-navigation__button document-navigation__button--submit'>Перейти</button>
                </div>
            </div>
            <div
                className='document-navigation__button document-navigation__button--right'
                dangerouslySetInnerHTML={{__html: arrow}}
            />
        </div>
    );
}

export default DocumentNavigation;
