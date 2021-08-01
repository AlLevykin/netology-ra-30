import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Posts from '../../pages/Posts';
import Post from '../../pages/Post';
import { PostsProvider } from '../PostsContext';

function App() {
  return (
    <div className="container py-3 w-25">
      <PostsProvider>
        <Router>
          <Switch>
            <Route path={["/", "/posts"]} exact component={Posts} />
            <Route path="/posts/:id" exact component={Post} />
          </Switch>
        </Router>
      </PostsProvider>
    </div>
  );
}

export default App;
