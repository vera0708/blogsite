import formatDate from "../../../../../utils/formatDate"

export const Time = ({ className, date }) => {
    console.log('className, date', className, date);
    return (
        <time className={className} dateTime={date}>
            {formatDate(date)}
        </time>)
}