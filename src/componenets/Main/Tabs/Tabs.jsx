import PropTypes from 'prop-types';
import style from './Tabs.module.css';

export const Tabs = ({ list, setList }) => {

    const handleClick = id => {
        setList(list.filter(item => item.id !== id));
    };

    return (
        <ul className={style.list}>
            {list.map(({ value, id }) => (
                <li key={id}>
                    <button
                        onClick={() => {
                            handleClick(id);
                        }}
                    >
                        {value}
                    </button>
                </li>
            ))}
            {/* <li>
                <a href='/'>Главная</a>
            </li>
            <li>
                <a href='/'>Просмотренные</a>
            </li>
            <li>
                <a href='/'>Сохраненные</a>
            </li>
            <li>
                <a href='/'>Мои посты</a>
            </li>*/}
        </ul>
    );
};

Tabs.propTypes = {
    list: PropTypes.array,
    setList: PropTypes.func,
};