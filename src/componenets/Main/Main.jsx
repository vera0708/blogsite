import React, { useState } from 'react';
import style from './Main.module.css';
import { Layout } from '../Layout/Layout';
import { Tabs } from './Tabs/Tabs';
import { List } from './List/List';
import { assignId } from '../../utils/generateRandomId';

const LIST = [
    { value: 'Главная' },
    { value: 'Просмотренные' },
    { value: 'Сохраненные' },
    { value: 'Мои посты' },
].map(assignId);

export const Main = () => {
    const [list, setList] = useState(LIST);

    const addItem = () => {
        setList(list.concat(assignId({ value: 'Новый пост' })));
    };

    return (
        <main className={style.main}>
            <Layout>
                <div className={style.container}>
                    <button onClick={addItem}>addItem</button>
                    <Tabs list={list} setList={setList} />
                    <List />
                </div>
            </Layout>
        </main>
    )
}