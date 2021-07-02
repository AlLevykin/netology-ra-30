import React from "react";
import ShopItemWraper from "../ShopItemWraper";
import ShopItemShape from "../../models/ShopItemShape";

class ShopItemClass extends React.Component {

    render() {

        const { item } = this.props;

        return (
            <ShopItemWraper>
                <div className="main-content">
                    <small>Class-based Component</small>
                    <h2>{item.brand}</h2>
                    <h1>{item.title}</h1>
                    <h3>{item.description}</h3>
                    <div className="description">
                        {item.descriptionFull}
                    </div>
                    <div className="highlight-window mobile">
                        <div className="highlight-overlay" />
                    </div>
                    <div className="divider" />
                    <div className="purchase-info">
                        <div className="price">{item.currency}{item.price.toFixed(2)}</div>
                        <button>Добавить в корзину</button>
                    </div>
                </div>
            </ShopItemWraper>
        );
    }
}

ShopItemClass.propTypes = {
    item: ShopItemShape
}

export default ShopItemClass;