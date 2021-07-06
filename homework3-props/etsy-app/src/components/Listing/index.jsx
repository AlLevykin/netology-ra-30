import ListingItem from './ListingItem/ListingItem';
import './Listing.css';

function Listing({ brand, items }) {
    return (
        <>
            <h1>{brand}</h1>
            {items.map(item => (
                (item.state === 'active') && <ListingItem />
            ))}
        </>
    );
}

export default Listing;