import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'cerebral/react';
import {tags} from '../constants';
import TranslationStatus from './translation-status';
import '../styles/translation-item.less';
import sn from 'class-names';


class TranslationItem extends React.Component {
    static propTypes = {
        id: PropTypes.string,
        text: PropTypes.string,
        translator: PropTypes.string,
        edit: PropTypes.bool,
        onClick: PropTypes.func,
        onChange: PropTypes.func,
        onBlur: PropTypes.func
    };

    static defaultProps = {
        text: '',
        edit: false
    };

    componentDidMount() {
        this.focusInput();
    }

    componentDidUpdate() {
        this.focusInput();
    }

    focusInput() {
        if (this.props.edit && this.input) {
            this.input.focus();
        }
    }

    render() {
        const {id, text, translator, edit, onClick, onChange, onBlur} = this.props;
        return (
            <div className={sn('translation-item')} onClick={onClick}>
                {edit
                    ? <textarea
                        ref={elem => this.input = elem}
                        className={sn('translation-item__body')}
                        value={text}
                        onChange={onChange}
                        onBlur={onBlur}
                    />
                    : <div className={sn('translation-item__body')}>{text}</div>
                }
                {!!translator && (
                    <div className={sn('translation-item__info')}>
                        <a href='#' className={sn('translation-item__author')}>{translator}</a> 12 июня в 12:12
                    </div>
                )}
                <div className={sn('translation-item__side')}>
                    <TranslationStatus id={id} />
                </div>
            </div>
        );
    }
}

export default connect({
    item: tags.translation,
    onClick: tags.translateClicked,
    onChange: tags.translateChanged,
    onBlur: tags.translateBlurred
}, ({item, onChange, onBlur, onClick}, {id, edit}) => ({
    id,
    edit,
    text: item.body,
    translator: item.translator.nickname,
    onClick: (e) => {
        e.stopPropagation();
        onClick({id, chunkId: item.parentId});
    },
    onChange: e => onChange({id, value: e.target.value}),
    onBlur: () => onBlur({id})
}), TranslationItem);
