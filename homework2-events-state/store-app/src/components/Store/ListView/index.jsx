import PropTypes from 'prop-types';
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

ListView.propTypes = {
    viewType: PropTypes.string.isRequired,
    products: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.number.isRequired
    })).isRequired
}

export default ListView;