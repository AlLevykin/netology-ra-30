import PropTypes from 'prop-types';
import ShopItem from "../ShopItem";

function ShopView({ viewType, products }) {
    return (
        <div className={viewType}>
            {products.map((product) => {
                return (
                    <ShopItem key={product.id} viewType={viewType} product={product} />
                );
            })}
        </div>
    );
}

ShopView.propTypes = {
    viewType: PropTypes.string.isRequired,
    products: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.number.isRequired
    })).isRequired
}

export default ShopView;