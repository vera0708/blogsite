import style from './Main.module.css';
import { Layout } from '../Layout/Layout';
import { Tabs } from './Tabs/Tabs';
import { List } from './List/List';
// import { assignId } from '../../utils/generateRandomId';

export const Main = () => {
    // const [list, setList] = useState(LIST);
    // const addItem = () => {
    //     setList(list.concat(assignId({ value: 'Новый пост' })));
    // };

    return (
        <main className={style.main}>
            <Layout>
                {/* <Tabs list={list} setList={setList} addItem={addItem} /> */}
                <Tabs />
                <List />
            </Layout>
        </main>
    )
}