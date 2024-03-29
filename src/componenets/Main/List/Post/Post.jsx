import PropTypes from 'prop-types';
import style from './Post.module.css';
import { ButtonDelete } from './ButtonDelete/ButtonDelete';
import { Content } from './Content/Content';
import Date from './Date';
import { Rating } from './Rating/Rating';
import { Thumbnail } from './Thumbnail/Thumbnail';

export const Post = ({ postData }) => {
    const {
        thumbnail,
        title,
        author,
        ups,
        url: markdown,
        // selftext: markdown,
        created: date,
    }
        = postData;
    console.log('postData: ', postData);
    console.log('markdown: ', markdown);
    return (
        <li className={style.post}>
            <Thumbnail thumbnail={thumbnail} title={title} />
            <Content title={title} author={author} markdown={markdown} />
            <Rating ups={ups} />
            <ButtonDelete />
            <Date date={date} />
        </li>
    );
};

Post.propTypes = {
    postData: PropTypes.object,
};