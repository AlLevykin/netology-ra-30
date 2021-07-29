import { Route } from 'react-router-dom';

const Content = ({ pages }) =>
    <div className="page">
        {
            pages.map((page) =>
                <Route key={page.path} path={page.path} exact component={page.component} />
            )
        }
    </div>;

export default Content;