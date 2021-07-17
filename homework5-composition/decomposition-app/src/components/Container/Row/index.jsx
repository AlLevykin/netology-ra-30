import GridElement from "../GridElement";

/**
 * Строковый компонент grid-системы. Выводит только колонки (Col-компоненты) или блоки (div).
 */
function Row(props) {
    return (        
        <GridElement className="row" filter={['Col', 'div']}>
            {props.children}
        </GridElement>
    );
}

export default Row;