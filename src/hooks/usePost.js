import { useEffect, useState } from "react";
import { URL_API } from "../API/const";

export const usePost = () => {
    const [post, setPost] = useState({});

    useEffect(() => {
        // if (!token) return;
        fetch(`${URL_API}/api/best`, {
            // headers: {
            //     Authorization: `bearer ${token}`,
            // },
        }).then((response) => {
            if (response.status === 401) {
                throw new Error(response.status);
            }
            return response.json()
        })
            .catch((err) => {
                console.error(err);
            });
    }, []);
    return [post, setPost]
};