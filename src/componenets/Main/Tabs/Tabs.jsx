import PropTypes from 'prop-types';
import style from './Tabs.module.css';
import { useState } from 'react';
import { assignId } from '../../../utils/generateRandomId';
import { ReactComponent as ArrowIcon } from './img/arrow.svg';
import { ReactComponent as EyeIcon } from './img/eye.svg';
import { ReactComponent as HomeIcon } from './img/home.svg';
import { ReactComponent as PostIcon } from './img/post.svg';
import { ReactComponent as SaveIcon } from './img/save.svg';

export const Tabs = ({ list, setList, addItem }) => {

    const LIST = [
        { value: 'Главная', Icon: EyeIcon },
        { value: 'Просмотренные', Icon: HomeIcon },
        { value: 'Сохраненные', Icon: PostIcon },
        { value: 'Мои посты', Icon: SaveIcon },
    ].map(assignId);

    const [isDropdownOpen, setIsDropdownOpen] = useState(false);

    // const handleClick = id => {
    //     setList(list.filter(item => item.id !== id));
    // };
    return (
        <div className={style.container}>
            <div className={style.wrapperBtn}>
                <button
                    className={style.btn}
                    onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                >
                    Показать / скрыть меню
                    <ArrowIcon width={15} height={15} />
                </button>
            </div>

            {isDropdownOpen && (
                <ul className={style.list}
                    onClick={() => setIsDropdownOpen(false)}>
                    {LIST.map(({ value, id, Icon }) => (
                        <li key={id}
                            className={style.item}>
                            <button
                                className={style.btn}
                                onClick={() => {
                                    console.log(value);
                                    // handleClick(id);
                                }}>
                                {value}
                                {Icon && <Icon width={30} height={30} />}
                            </button>
                        </li>
                    ))}
                </ul>)}
        </div>
    );
};

Tabs.propTypes = {
    list: PropTypes.array,
    setList: PropTypes.func,
    addItem: PropTypes.func,
};