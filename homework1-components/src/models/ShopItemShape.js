import PropTypes from "prop-types";

const ShopItemShape = PropTypes.shape({
    brand: PropTypes.string,
    title: PropTypes.string,
    description: PropTypes.string,
    descriptionFull: PropTypes.string,
    currency: PropTypes.string,      
    price: PropTypes.number                  
})

export default ShopItemShape;