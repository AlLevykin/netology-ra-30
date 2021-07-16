import React from 'react';

function Card(props) {

    const types = ['CardHeader', 'CardBody', 'CardFooter', 'img'];

    const children = React.Children.toArray(props.children);

    return (
        <>
            {
                children.length > 0 &&
                <div className={`card h-100 ${props.className}`}>
                    {
                        props.freestyled ?
                            children :
                            children.filter(elem => types.indexOf(
                                elem.type.name ?
                                elem.type.name :
                                elem.type
                            ) > -1)
                    }
                </div>
            }
        </>
    );
}

export default Card;