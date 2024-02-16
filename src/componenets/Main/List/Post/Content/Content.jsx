import { useState, useEffect } from 'react';
import { Text } from '../../../../../UI/Text/Text';
import style from './Content.module.css';
import PropTypes from 'prop-types';

export const Content = ({ title, author }) => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    useEffect(() => {
        console.log(isModalOpen)
    }, [isModalOpen])

    return (
        <div className={style.content}>
            <Text
                As='h2'
                className={style.title}>
                <a
                    href='#post'
                    className={style.linkPost}
                    onClick={() => setIsModalOpen(true)}>
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
            {isModalOpen && (<p>Открыто</p>)}
        </div>
    );
};

Content.propTypes = {
    title: PropTypes.string,
    author: PropTypes.string,
};