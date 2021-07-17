import GridElement from "../GridElement";

function Col(props) {
    return (        
        <GridElement className={`col${(props.numOfCols === undefined) ? "" : ("-" + props.numOfCols)}`} blacklist filter={['Col']}>
            {props.children}
        </GridElement>
    );
}

export default Col;