import React from 'react';
import style from './List.module.css';
import { Post } from './Post/Post';

export const List = () => {

    const postData = [
        {
            thumbnail: '',
            title: 'Title1',
            author: 'Nickname1',
            ups: 24,
            date: '2024-02-06T09:45:00.000Z',
            id: '123',
        }, {
            thumbnail: '',
            title: 'Title2',
            author: 'Nickname2',
            ups: 77,
            date: '2024-02-07T12:20:00.000Z',
            id: '386',
        }, {
            thumbnail: '',
            title: 'Title3',
            author: 'Nickname3',
            ups: 35,
            date: '2024-02-08T11:15:00.000Z',
            id: '456',
        }, {
            thumbnail: '',
            title: 'Title4',
            author: 'Nickname4',
            ups: 68,
            date: '2024-02-09T06:05:00.000Z',
            id: '789',
        },
    ];

    return (
        <ul className={style.list}>
            {postData.map((postData) => (
                <Post key={postData.id} postData={postData} />
            ))},
        </ul>
    );
};