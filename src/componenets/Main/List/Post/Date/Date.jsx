import formatDate from "../../../../../utils/formatDate";
import style from './Date.module.css';

export const Date = ({ date }) => {
    console.log('date: ', date);
    return (
        <time className={style.date} dateTime={date}>
            {formatDate(date)}
        </time>)
}