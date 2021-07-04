import ShopItem from "../ShopItem";

function ListView({ viewType, products }) {
    return (
        <div className="listview">
            {products.map((product) => {
                return (
                    <ShopItem key={product.id} viewType={viewType} product={product} />
                );
            })}
        </div>
    );
}

export default ListView;