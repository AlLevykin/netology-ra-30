import PropTypes from 'prop-types';

function ListingItem({ item }) {

    const { url, MainImage: {url_570xN}, title, price, currency_code, quantity } = item;

    const Price = () => {
        switch (currency_code) {
            case 'USD':
                return (
                    <>
                        <span className="material-icons">attach_money</span>{price}
                    </>
                );
            case 'EUR':
                return (
                    <>
                        <span className="material-icons">euro</span>{price}
                    </>
                );
            default:
                return (
                    <>
                        {price} {currency_code}
                    </>
                );
        }
    }

    return (
        <>
            <div className="item">
                <div className="item-image">
                    <a href={url}>
                        <img src={url_570xN} alt="" title={title} />
                    </a>
                </div>
                <div className="item-details">
                    <p className="item-title">{title}</p>
                    <p className="item-price"><Price /></p>
                    <p className={`item-quantity level-${quantity < 10 ? "low" : ((quantity < 20) ? "medium" : "high")}`}>{quantity} left</p>
                </div>
            </div>
        </>
    );
}

ListingItem.propTypes = {
    item: PropTypes.shape({
        url: PropTypes.string.isRequired,
        MainImage: PropTypes.shape({
            url_570xN: PropTypes.string.isRequired
        }),
        title: PropTypes.string.isRequired, 
        price: PropTypes.string.isRequired,  
        currency_code: PropTypes.string.isRequired,
        quantity: PropTypes.number.isRequired      
    }).isRequired
}

export default ListingItem;