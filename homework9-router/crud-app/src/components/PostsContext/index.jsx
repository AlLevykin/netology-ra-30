import { useEffect, useState, createContext } from 'react';

const PostsContext = createContext([]);

export const PostsProvider = (props) => {

    const [posts, setPosts] = useState([]);

    const getPosts = () => fetch("/api/posts")
        .then((res) => res.json())
        .then((data) => setPosts(data));

    useEffect(() => getPosts(),
        []);

    return (
        <PostsContext.Provider value={{posts, getPosts}}>
            {props.children}
        </PostsContext.Provider>
    );

};

export default PostsContext;