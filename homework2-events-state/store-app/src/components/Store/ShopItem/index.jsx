function ShopItem({ viewType, product }) {
    return (
        <div className={`shopitem shopitem_${viewType}`}>
            <div>
                <h1 className={`shopitem_caption_${viewType}`}>{product.name}</h1>
                <h2 className={`shopitem_color shopitem_color_${viewType}`} style={{color: product.color}}>{product.color}</h2>
            </div>
            <img className="shopitem" src={product.img} alt={product.name} title={`${product.name}, color: ${product.color}`}></img>
            <div className={`shopitem_price shopitem_price_${viewType}`}>
                <p><span className="material-icons">attach_money</span>{product.price}</p>
                <button><span className="material-icons">add_shopping_cart</span><span className={`shopitem_cart_${viewType}`}> Add to cart</span></button>
            </div>
        </div>
    );
}

export default ShopItem;