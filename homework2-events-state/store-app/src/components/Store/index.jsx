import { useState } from 'react';
import IconSwitch from './IconSwitch';
import ListView from './ListView';
import './Store.css';

function Store({ caption, products }) {

    const [viewType, setState] = useState(0);

    const viewTypes = [
        {
            name: 'cards',
            icon: 'view_module'
        },
        {
            name: 'tiles',
            icon: 'view_comfy'
        },
        {
            name: 'list',
            icon: 'view_list'
        }];

    const changeViewType = () => {
        setState(
            viewType < viewTypes.length - 1 ? viewType + 1 : 0
        );
    }

    return (
        <div>
            <h1>{caption}</h1>
            <IconSwitch icon={viewTypes[viewType].icon} onClick={changeViewType} />
            <ListView products={products} viewType={viewTypes[viewType].name}/>
        </div>
    );
}

export default Store;