import { Layout } from '../Layout/Layout';
import Auth from './Auth';
import style from './Header.module.css';
import PropTypes from 'prop-types';
import { Heading } from './Heading/Heading';
import { Logo } from './Logo/Logo';
import { Search } from './Search/Search';

export const Header = ({ token }) => {
    return (
        <header className={style.header}>
            <Layout>
                <div className={style.gridContainer}>
                    <Logo />
                    <Heading text='Главная' />
                    <Search />
                    <Auth token={token} />
                </div>
            </Layout>
        </header>
    );
};

Header.propTypes = {
    token: PropTypes.string,
};