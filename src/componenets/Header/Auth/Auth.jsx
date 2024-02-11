import React from 'react';
import style from './Auth.module.css';
// import loginImg from './img/login.svg';
import { ReactComponent as LogIcon } from './img/login.svg';

export const Auth = ({ auth }) => {
    return (
        <button className={style.button}>
            {auth
                ? auth
                : <LogIcon />
            }
        </button>
    )
};