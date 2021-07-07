import PropTypes from 'prop-types';
import ListingItem from './ListingItem/ListingItem';
import './Listing.css';

function Listing({ brand, items }) {
    return (
        <>
            <h1>{brand}</h1>
            <div className="item-list">
                {items.map(item => (
                    (item.state === 'active') && <ListingItem key={item.listing_id} item={item} />
                ))}
            </div>
        </>
    );
}

Listing.propTypes = {
    brand: PropTypes.string.isRequired,
    items: PropTypes.arrayOf(PropTypes.shape({
        state: PropTypes.string.isRequired,
        listing_id: PropTypes.number.isRequired
    }))
}

export default Listing;