import React from 'react';

/**
 * Базовый компонент grid-системы.
 * @param {Array} props.filter Массив строк, содержащий идентификаторы фильтруемых дочерних элементов.
 * @param {boolean} props.blacklist Способ фильтрации. 
 * @param {string} props.className CSS-классы элемента grid-системы. 
 * @param {any} props.children Контент элемента grid-системы.
 */
function GridElement(props) {

    const children = React.Children.toArray(props.children);

    const getElemName = (elem) => {
        if (typeof elem === 'string') {
            return elem;
        } else {
            return elem.type.name ? elem.type.name : elem.type
        }
    }

    return (
        <div className={props.className}>
            {
                children.length > 0 &&
                children.filter(elem =>
                    props.blacklist ?
                        props.filter.indexOf(getElemName(elem)) === -1
                        :
                        props.filter.indexOf(getElemName(elem)) > -1
                )
            }
        </div>
    );
}

export default GridElement;