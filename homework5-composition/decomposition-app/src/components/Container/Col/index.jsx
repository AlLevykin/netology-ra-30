import GridElement from "../GridElement";

/**
 * Колонка grid-системы. Выводит все дочерние элементы кроме колонок grid-системы.
 * @param {string} props.numOfCols Ширина колонки
 * @param {any} props.children Контент колонки
 */
function Col(props) {
    return (        
        <GridElement className={`col${(props.numOfCols === undefined) ? "" : ("-" + props.numOfCols)}`} blacklist filter={['Col']}>
            {props.children}
        </GridElement>
    );
}

export default Col;