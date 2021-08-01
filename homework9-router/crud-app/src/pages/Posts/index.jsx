import { useContext } from 'react';
import PostsContext from '../../components/PostsContext';
import DateToString from '../../utils/DateToString';
import Menu from "../../components/Menu";

const Posts = () => {

    const {posts} = useContext(PostsContext);

    return (
        <>
            <Menu />
            {
                posts.map((post) =>
                    <div key={post.id} className="card my-3">
                        <a href={`/posts/${post.id}`} className="stretched-link card-header fw-bold link-secondary">
                            {DateToString(post.created)}
                        </a>
                        <div className="card-body">
                            <p className="card-text">
                                {post.content}
                            </p>
                        </div>
                    </div>
                )
            }
        </>
    );
}


export default Posts;