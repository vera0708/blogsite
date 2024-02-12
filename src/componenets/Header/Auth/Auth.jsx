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
            .then(data => {
                console.log(data);
                setAuth({ name: 'Vera' });
            });
    }, [token]);
    return (
        <div className={style.container}>
            <button className={style.button}>
                {auth.name ? (
                    <img src={'img'} title={auth.name} alt={`Avatar ${auth.name}`} />
                ) : (
                    <Text
                        As='a'
                        href={urlAuth}>
                        <LogIcon />
                    </Text>
                )}
            </button>
        </div>
    );
};

Auth.propTypes = {
    token: PropTypes.string,
};
{/* <LogIcon className={style.svg} /> */ }