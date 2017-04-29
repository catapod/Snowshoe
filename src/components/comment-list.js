import React from 'react';
import '../styles/comment-list.less';
import CommentItem from './comment-item';
import CommentListSort from './comment-list-sort';
import CommentForm from './comment-form';


function CommentList() {
    return (
        <div className='comment-list'>
            <div className='comment-list__head'>
                <CommentListSort />
                <p className='comment-list__title'>Комментарии</p>
            </div>
            <div className='comment-list__item'>
                <CommentItem
                    author='Maxim Valeev'
                    date='Сегодня'
                    text='спамер :)'
                />
            </div>
            <div className='comment-list__item'>
                <CommentItem
                    author='Artem Zverkovskiy'
                    date='Вчера'
                    text='Я же допустил короткие отходы от темы :) + это о проектной деятельности. Так что не надо тут)'
                />
            </div>
            <div className='comment-list__item'>
                <CommentItem
                    author='Max Gomzz'
                    date='12 июня в 12:12'
                    text='Разве это дизайн? Ты просто красиво нарисовал то, что я просил!'
                />
            </div>
            <CommentForm />
        </div>
    );
}

export default CommentList;
