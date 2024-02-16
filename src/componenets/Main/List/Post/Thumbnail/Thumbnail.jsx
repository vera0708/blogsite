import style from './Thumbnail.module.css';
import notphoto from '../img/notphoto.jpg';

export const Thumbnail = ({ thumbnail, title }) => {
    if (thumbnail === '') {
        thumbnail = 'пробел'
    }
    return <img className={style.img}
        src={notphoto}
        alt={title} />
}