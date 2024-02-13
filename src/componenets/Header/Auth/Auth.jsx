import { useEffect, useState } from 'react';
import style from './Auth.module.css';
import PropTypes from 'prop-types';
// import loginImg from './img/login.svg';
import { ReactComponent as LogIcon } from './img/login.svg';
import { Text } from '../../../UI/Text/Text';
import { urlAuth } from '../../../API/auth';
import { URL_API } from '../../../API/const';

export const Auth = ({ token }) => {
    const [auth, setAuth] = useState({});

    useEffect(() => {
        if (!token) return;
        fetch(`${URL_API}/api/v1/me`, {
            headers: {
                Authorization: `bearer ${token}`,
            },
        }).then(response => response.json())
            .then(({ name, icon_img: iconImg }) => {
                const img = iconImg.replace(/\?.*$/, '')
                setAuth({ name, img });
            })
            .catch((err) => {
                console.error(err);
                setAuth({})
            });
    }, [token]);
    return (
        <div className={style.container}>
            {auth.name ? (
                <button className={style.btn}>
                    <img className={style.img}
                        src={auth.img}
                        title={auth.name}
                        alt={`Aвaтaр ${auth.name}`}
                    />
                    <Text
                        As='span'
                        className={style.authName}
                    >{auth.name}
                    </Text>
                </button>
            ) : (
                <Text
                    As='a'
                    className={style.authLink}
                    href={urlAuth}>
                    <LogIcon />
                </Text>
            )}

        </div>
    );
};

Auth.propTypes = {
    token: PropTypes.string,
};
{/* <LogIcon className={style.svg} /> */ }