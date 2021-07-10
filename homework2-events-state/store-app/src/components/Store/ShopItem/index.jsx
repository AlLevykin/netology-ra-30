import PropTypes from 'prop-types';

function ShopItem({ viewType, product }) {

    const views = {
        CardsView: () => (
            <div className="CardsView-ShopCard">
                <h1 className="CardsView-ShopCardTitle">{product.name}</h1>
                <small className="CardsView-ShopCardSubtitle">{product.color}</small>
                <div
                    className="CardsView-ShopCardImage"
                    style={{ backgroundColor: product.color, backgroundImage: 'url(' + product.img + ')' }}
                />
                <footer className="CardsView-ShopCardFooter">
                    <div className="CardsView-ShopCardPrice">${product.price}</div>
                    <div className="CardsView-AddToCart">
                        <button className="AddToCart">Add to cart</button>
                    </div>
                </footer>
            </div>
        ),
        TilesView: () => (
            <div className="TilesView-ShopItemCell">
                <h1 className="TilesView-ShopCardTitle">{product.name}</h1>
                <img className="TilesView-ShopCardImage" src={product.img} alt={product.name} title={`${product.name}, color: ${product.color}`}></img>
                <button className="AddToCart"><span className="material-icons">add_shopping_cart</span> ${product.price} </button>
            </div>
        ),
        ListView: () => (
            <>
                <div className="ListView-ShopItemCell ListView-ShopItemImageCell">
                    <img className="ListView-ShopItemImage" src={product.img} alt={product.name} title={`${product.name}, color: ${product.color}`} />
                </div>
                <div className="ListView-ShopItemCell ListView-ShopItemName">{product.name}</div>
                <div className="ListView-ShopItemCell ListView-ShopItemColor">{product.color}</div>
                <div className="ListView-ShopItemCell ListView-ShopItemPrice">${product.price}</div>
                <div className="ListView-ShopItemCell ListView-ShopItemAdd">
                    <button className="AddToCart">Add to cart</button>
                </div>
            </>
        )
    }

    return (
        views[viewType] && views[viewType]()
    );
}

ShopItem.propTypes = {
    viewType: PropTypes.string.isRequired,
    product: PropTypes.shape({
        id: PropTypes.number.isRequired,
        name: PropTypes.string.isRequired,
        price: PropTypes.number.isRequired,
        color: PropTypes.string.isRequired,
        img: PropTypes.string.isRequired
    }).isRequired
}

export default ShopItem;