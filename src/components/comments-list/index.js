import './comments-list.less';

import React from 'react';

import CommentForm from '../comment-form';
import Comment from '../comment';

export default class CommentsList extends React.Component {
    render() {
        return (
            <div className='comments-list'>
                <div className='comments-list__head'>
                    <div className='sort-comments sort-comments__droplink'>
                        <div className='sort-comments__dropdown'>
                            <label className='sort-comments__label'>
                                <input type='radio' name='comments-sort'/> Сначала новые
                            </label>
                            <label className='sort-comments__label'>
                                <input type='radio' name='comments-sort'/> Сначала старые
                            </label>
                        </div>
                    </div>
                    <p className='comments-list__title'>Комментарии</p>
                </div>
                <div className='comments-list__item'>
                    <Comment
                        author='Maxim Valeev'
                        date='Сегодня'
                        body='спамер :)' />
                </div>
                <div className='comments-list__item'>
                    <Comment
                        author='Artem Zverkovskiy'
                        date='Вчера'
                        body='Я же допустил короткие отходы от темы :) + это о проектной деятельности. Так что не надо тут)' />
                </div>
                <div className='comments-list__item'>
                    <Comment
                        author='Max Gomzz'
                        date='12 июня в 12:12'
                        body='Разве это дизайн? Ты просто красиво нарисовал то, что я просил!' />
                </div>
                <CommentForm />
            </div>
        );
    }
}
