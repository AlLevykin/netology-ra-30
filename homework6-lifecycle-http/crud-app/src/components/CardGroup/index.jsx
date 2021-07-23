import { Children } from 'react';
import uuidv4 from '../../util/uuidv4';

const CardGroup = (props) => {

    const children = Children.toArray(props.children);

    return (<div className="row row-cols-1 row-cols-md-3 g-4">
        {
            children.map((elem) =>
                <div className="col" key={uuidv4()}>{elem}</div>
            )
        }
    </div>);
};

export default CardGroup;