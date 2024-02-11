import PropTypes from 'prop-types';
import style from './Tabs.module.css';
import { useEffect, useState } from 'react';
import { assignId } from '../../../utils/generateRandomId';
import { ReactComponent as ArrowIcon } from './img/arrow.svg';
import { ReactComponent as HomeIcon } from './icon/home.svg';
// import { ReactComponent as EyeIcon } from './img/eye.svg';
import { ReactComponent as TopIcon } from './icon/top.svg';
import { ReactComponent as BestIcon } from './icon/best.svg';
import { ReactComponent as SaveIcon } from './icon/hot.svg';
import { debounceRaf } from '../../../utils/debounce';

export const Tabs = ({ list, setList, addItem }) => {

    const LIST = [
        { value: 'Главная', Icon: HomeIcon },
        // { value: 'Главная', Icon: EyeIcon },
        { value: 'Tоп', Icon: TopIcon },
        { value: 'Лучшие', Icon: BestIcon },
        { value: 'Горячие', Icon: SaveIcon },
    ].map(assignId);

    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const [isDropdown, setIsDropdown] = useState(true);

    const handleResize = () => {
        if (document.documentElement.clientWidth < 768) {
            setIsDropdown(true);
        } else {
            setIsDropdown(false);
        }
    };

    useEffect(() => {
        const debounceResize = debounceRaf(handleResize);
        debounceResize();
        window.addEventListener('resize', debounceResize);
        return () => {
            window.removeEventListener('resize', debounceResize);
        };
    }, []);
    // const handleClick = id => {
    //     setList(list.filter(item => item.id !== id));
    // };
    return (
        <div className={style.container}>
            {isDropdown && (
                <div className={style.wrapperBtn}>
                    <button
                        className={style.btn}
                        onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                    >
                        Показать / скрыть меню
                        <ArrowIcon width={15} height={15} />
                    </button>
                </div>)}

            {(isDropdownOpen || !isDropdown) && (
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