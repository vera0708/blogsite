import { useEffect, useState, useContext } from "react";
import { tokenContext } from "../context/tokenContext";
import { URL_API } from "../API/const";

export const usePost = () => {
    const [posts, setPosts] = useState([]);
    const { token } = useContext(tokenContext);

    useEffect(() => {
        if (!token) return;
        fetch(`${URL_API}/best`, {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        }).then((response) => {
            if (response.status === 401) {
                throw new Error(response.status);
            }
            return response.json()
        }).then((data) => {
            const posts = data?.data?.children?.map(post => post?.data);
            setPosts(posts);
        })
            .catch((err) => {
                console.error(err);
            });
    }, [token]);

    return { posts, setPosts };
};