import React from 'react';

function Card(props) {

    const types = ['CardHeader', 'CardBody', 'CardFooter', 'img'];

    const children = React.Children.toArray(props.children);

    const getElemName = (elem) => {
        if (typeof elem === 'string') {
            return elem;
        } else {
            return elem.type.name ? elem.type.name : elem.type
        }
    }

    return (
        <>
            {
                children.length > 0 &&
                <div className={`card h-100 ${props.className}`}>
                    {
                        props.freestyled ?
                            children :
                            children.filter(elem => types.indexOf(getElemName(elem)) > -1)
                    }
                </div>
            }
        </>
    );
}

export default Card;