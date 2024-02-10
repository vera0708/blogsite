import React from 'react';
import PropTypes from 'prop-types';
import style from './Post.module.css';
import notphoto from './img/notphoto.jpg';
import { ButtonDelete } from './ButtonDelete/ButtonDelete';
// import Button from './Button';
import { Content } from './Content/Content';
import Date from './Date';
import { Rating } from './Rating/Rating';

export const Post = ({ postData }) => {
    const { title, author, ups, date } = postData;
    return (
        <li className={style.post}>
            <img className={style.img} src={notphoto} alt={title} />
            <Content title={title} author={author} />
            <Rating ups={ups} />
            <ButtonDelete />
            <Date date={date} />
        </li>
    )
};

Post.propTypes = {
    postData: PropTypes.object,
};