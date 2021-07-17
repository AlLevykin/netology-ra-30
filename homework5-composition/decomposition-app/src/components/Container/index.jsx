import GridElement from "./GridElement";

function Container(props) {
    return (
        <GridElement className="container mt-3" filter={['Row']}>
            {props.children}
        </GridElement>
    );
}

export default Container;