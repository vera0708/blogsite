import { Layout } from '../Layout/Layout';
import Auth from './Auth';
import style from './Header.module.css';
import { Heading } from './Heading/Heading';
import { Logo } from './Logo/Logo';
import { Search } from './Search/Search';
import { tokenContext } from '../../context/tokenContext';

export const Header = () => {
    const { Consumer } = tokenContext;

    return (
        <header className={style.header}>
            <Layout>
                <div className={style.gridContainer}>
                    <Logo />
                    <Heading text='Главная' />
                    <Search />
                    <Consumer>
                        {ctx => <Auth token={ctx.token} delToken={ctx.delToken} />}
                    </Consumer>
                </div>
            </Layout>
        </header>
    );
};