import { useState, useEffect, useContext } from 'react';
import PostsContext from '../../components/PostsContext';
import DateToString from '../../utils/DateToString';

const Post = ({ match, history }) => {

    const MODE_VIEW = 0;
    const MODE_EDIT = 1;
    const MODE_CREATE = 2;

    const postId = match.params.id;
    const { posts, getPosts } = useContext(PostsContext);
    const [post, setPost] = useState(null);
    const [mode, setMode] = useState(MODE_VIEW);
    const [inAction, setInAction] = useState(false);
    const [status, setStatus] = useState("");

    useEffect(
        () => {
            if (postId === "new") {
                setPost({ id: postId, created: Date.now(), content: "" });
                setMode(MODE_CREATE);
            } else {
                setPost({ ...posts.find(curPost => curPost.id === postId) })
            }
        }, [posts, postId]);

    const getUrl = (action) => `/api/posts/${action === "POST" ? "" : post.id}`;

    const doAction = (action) => {
        const url = getUrl(action);
        setInAction(true);
        fetch(url, {
            method: action,
            headers: {
                "Content-Type": "application/json;charset=utf-8"
            },
            body: action === "POST" ? JSON.stringify(post) : null
        })
            .then((res) => {
                if (res.status === 200) {
                    getPosts();
                    history.push("/");
                } else {
                    setInAction(false);
                    setStatus(`${res.status}: ${res.statusText}`)
                }
            })
    };

    return (
        post != null ?
            <div className="card my-3">
                <p className="card-header d-flex flex-row">
                    <span className="fw-bold text-secondary text-decoration-underline">{DateToString(post.created)}</span>
                    <span className="badge bg-danger mx-2 text-truncate">{status}</span>
                </p>
                <div className="card-body">
                    {
                        (mode === MODE_EDIT) || (mode === MODE_CREATE) ?
                            <textarea
                                className="form-control"
                                rows="10"
                                value={post.content}
                                onChange={(event) => setPost({ ...post, content: event.target.value })}
                            />
                            :
                            <p className="card-text">
                                {post.content}
                            </p>
                    }
                </div>
                <div className="card-footer text-end">
                    {
                        (mode === MODE_EDIT) || (mode === MODE_CREATE) ?
                            <div className="btn-group">
                                <button
                                    className="btn btn-primary btn-sm"
                                    onClick={() => doAction("POST")}>
                                    {inAction ? <span className="spinner-border spinner-border-sm text-white" role="status" /> : "Сохранить"}
                                </button>
                                <button
                                    className="btn btn-secondary btn-sm"
                                    onClick={() => {
                                        if (mode === MODE_EDIT) {
                                            setMode(MODE_VIEW)
                                        } else {
                                            history.push("/");
                                        }
                                    }}>
                                    Отмена
                                </button>
                            </div>
                            :
                            <div className="btn-group">
                                <button
                                    className="btn btn-danger btn-sm"
                                    onClick={() => doAction("DELETE")}>
                                    {inAction ? <span className="spinner-border spinner-border-sm text-white" role="status" /> : "Удалить"}
                                </button>
                                <button
                                    className="btn btn-primary btn-sm"
                                    onClick={() => setMode(MODE_EDIT)}>
                                    Изменить
                                </button>
                                <button
                                    className="btn btn-secondary btn-sm"
                                    onClick={() => history.push("/")}>
                                    Закрыть
                                </button>                                
                            </div>
                    }
                </div>
            </div>
            :
            <></>
    )
};

export default Post;