import GridElement from "./GridElement";

/**
 * Контейнер grid-системы. Выводит только сроки (Row-компоненты).
 */
function Container(props) {
    return (
        <GridElement className="container mt-3" filter={['Row']}>
            {props.children}
        </GridElement>
    );
}

export default Container;