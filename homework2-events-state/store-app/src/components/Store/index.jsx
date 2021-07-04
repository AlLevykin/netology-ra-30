import { useState } from 'react';
import IconSwitch from './IconSwitch';
import ListView from './ListView';
import './Store.css';

function Store({ brand, products }) {

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
        <>
            <div className="navbar">
                <h1>{brand}</h1>
                <div className="iconswitch">
                    <IconSwitch icon={viewTypes[viewType].icon} onClick={changeViewType} />
                </div>
            </div>
            <ListView viewType={viewTypes[viewType].name} products={products} />
        </>
    );
}

export default Store;