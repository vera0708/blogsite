import style from './ButtonDelete.module.css';
import { ReactComponent as DeleteIcon } from './img/delete.svg';

export const ButtonDelete = () => {
    return <button className={style.delete} aria-label='Удалить' >
        <DeleteIcon width={15} height={15} />
    </button>
}