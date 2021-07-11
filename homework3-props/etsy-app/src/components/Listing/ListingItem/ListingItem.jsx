import PropTypes from 'prop-types';
import classNames from 'classnames';
import Stars from '../Stars';

function ListingItem({ item }) {

    const { url, MainImage: { url_570xN }, title, price, currency_code, quantity, stars } = item;

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
                    <Stars count={stars} />
                    <p className="item-title">{title}</p>
                    <p className="item-price"><Price /></p>
                    <p className={classNames({
                        'item-quantity': true,
                        'level-low': quantity < 10,
                        'level-medium': quantity >= 10 && quantity < 20,
                        'level-high': quantity >= 20                                           
                    })}>
                        {quantity} left
                    </p>
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
        quantity: PropTypes.number.isRequired,
        stars: PropTypes.number.isRequired
    }).isRequired
}

export default ListingItem;