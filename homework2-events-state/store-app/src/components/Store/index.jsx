import PropTypes from 'prop-types';
import { useState } from 'react';
import IconSwitch from './IconSwitch';
import ListView from './ShopView';
import './Store.css';

function Store({ brand, products }) {

    const [viewType, setState] = useState(0);

    const viewTypes = [
        {
            name: 'CardsView',
            nextIcon: 'view_list'
        },
        {
            name: 'TilesView',
            nextIcon: 'view_module'
        },
        {
            name: 'ListView',
            nextIcon: 'view_comfy'
        }];

    const changeViewType = () => {
        setState(
            viewType < viewTypes.length - 1 ? viewType + 1 : 0
        );
    }

    return (
        <div className="Store">
            <h1>{brand}</h1>
            <div className="Store-Switch">
                <IconSwitch icon={viewTypes[viewType].nextIcon} onClick={changeViewType} />
            </div>
            <ListView viewType={viewTypes[viewType].name} products={products} />
        </div>
    );
}

Store.propTypes = {
    brand: PropTypes.string.isRequired,
    products: PropTypes.instanceOf(Array).isRequired
}

export default Store;