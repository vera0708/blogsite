import style from './Thumbnail.module.css';

export const Thumbnail = ({ thumbnail, title }) => {
    return <img className={style.img}
        src={thumbnail}
        alt={title}
    />
}