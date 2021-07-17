import GridElement from "../GridElement";

function Row(props) {
    return (        
        <GridElement className="row" filter={['Col', 'div']}>
            {props.children}
        </GridElement>
    );
}

export default Row;