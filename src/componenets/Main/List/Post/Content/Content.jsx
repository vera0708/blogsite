import { useState, useEffect } from 'react';
import { Text } from '../../../../../UI/Text/Text';
import style from './Content.module.css';
import PropTypes from 'prop-types';
import { Modal } from '../../../../Modal/Modal';

export const Content = ({ title, author, markdown }) => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    useEffect(() => {
    }, [isModalOpen])

    return (
        <div className={style.content}>
            <Text
                As='h2'
                className={style.title}>
                <a
                    href='#post'
                    className={style.linkPost}
                    onClick={() => {
                        setIsModalOpen(true);
                    }}>
                    {title}
                </a>
            </Text>
            <Text
                As='a'
                color='orange'
                size={12}
                tsize={14}
                className={style.linkAuthor}
                href='#author'>
                {author}
            </Text>
            {isModalOpen && (<Modal title={title} author={author} markdown={markdown} />)}
        </div>
    );
};

Content.propTypes = {
    title: PropTypes.string,
    author: PropTypes.string,
    markdown: PropTypes.string,
};