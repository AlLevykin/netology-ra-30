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

export default Listing;