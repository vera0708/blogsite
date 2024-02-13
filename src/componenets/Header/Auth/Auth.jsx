import { useContext, useState } from 'react';
import style from './Auth.module.css';
import { ReactComponent as LogIcon } from './img/login.svg';
import { Text } from '../../../UI/Text/Text';
import { urlAuth } from '../../../API/auth';
import { useAuth } from '../../../hooks/useAuth';
import { tokenContext } from '../../../context/tokenContext';

export const Auth = () => {
    const { delToken } = useContext(tokenContext);
    //    const [auth, setAuth] = useState({});
    const [auth, clearAuth] = useAuth();
    const [showLogout, setShowLogout] = useState(false);

    const getOut = () => {
        setShowLogout(!showLogout);
    };

    const logOut = () => {
        delToken();
        clearAuth();
    }

    return (
        <div className={style.container}>
            {auth.name ? (
                <>
                    <button className={style.btn}
                        onClick={getOut}
                    >
                        <img className={style.img}
                            src={auth.img}
                            title={auth.name}
                            alt={`Aвaтaр ${auth.name}`}
                        />
                        <Text As='span'
                            className={style.authName}
                        >{auth.name}
                        </Text>
                    </button>
                    {showLogout && (
                        <button className={style.logout}
                            onClick={logOut}>
                            Выйти
                        </button>
                    )}
                </>) : (
                <Text As='a'
                    className={style.authLink}
                    href={urlAuth}>
                    <LogIcon
                        className={style.svg}
                    />
                </Text>
            )}
        </div>
    );
};