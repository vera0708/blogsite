import React from 'react';
import PropTypes from 'prop-types';
import style from './Modal.module.css';
import { ReactComponent as CloseIcon } from './img/close.svg';
import Markdown from 'markdown-to-jsx';

export const Modal = ({ title, author, markdown }) => (
    <div className={style.overlay}>
        <div className={style.modal}>
            <h2 className={style.title}>{title}</h2>
            <div className={style.content}>
                <Markdown options={{
                    overrides: {
                        a: {
                            props: {
                                target: '_blank',
                            }
                        }
                    }
                }}>
                    {markdown}
                </Markdown>
            </div>
            <p className={style.author}>{author}</p>
            <button className={style.close}>
                <CloseIcon />
            </button>
        </div>
    </div>
);

Modal.propTypes = {
    title: PropTypes.string,
    author: PropTypes.string,
    markdown: PropTypes.string,
};