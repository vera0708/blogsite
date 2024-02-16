import React from "react";
import PropTypes from 'prop-types';
import { usePost } from "../hooks/usePost";

export const postsContext = React.createContext({});

export const PostsContextProvider = ({ children }) => {
    const { posts, setPosts } = usePost();

    return (
        <postsContext.Provider value={{ posts, setPosts }}>
            {children}
        </postsContext.Provider>
    );
};

PostsContextProvider.propTypes = {
    children: PropTypes.node.isRequired,
};