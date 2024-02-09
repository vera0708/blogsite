import React from 'react';
import PropTypes from 'prop-types';
import style from './Post.module.css';
import notphoto from './img/notphoto.jpg';
import formatDate from '../../../../utils/formatDate';
import { ButtonDelete } from './ButtonDelete/ButtonDelete';
import Button from './Button';
// import Time from './Time';

export const Post = ({ postData }) => {
    const { title, author, ups, date } = postData;
    return (
        <li className={style.post}>
            <img className={style.img} src={notphoto} alt={title} />
            <div className={style.content}>
                <h2 className={style.title}>
                    <a className={style.linkPost} href='#post'>
                        {title}
                    </a>
                </h2>
                <a className={style.linkAuthor} href='#author'>
                    {author}
                </a>
            </div>
            <div className={style.rating}>
                <Button className={style.up} aria-label='Повысить рейтинг' />
                <p className={style.ups}>{ups}</p>
                <Button className={style.down} aria-label='Понизить рейтинг' />
            </div>
            <ButtonDelete className={style.delete} aria-label='Удалить' />
            {/* <Time className={style.date} dateTime={date} /> */}
            <time className={style.date} dateTime={date}>{formatDate(date)}</time>
        </li>
    )
};

Post.propTypes = {
    postData: PropTypes.object,
};