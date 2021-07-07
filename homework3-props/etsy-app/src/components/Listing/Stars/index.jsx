import PropTypes from 'prop-types';

function Stars({ count }) {
    return (
        <>
           {((count > 0) && (count < 6)) && <div className={`star star-${count}`} />}
        </>
    );
}

Stars.propTypes = {
    count: PropTypes.oneOf([1, 2, 3, 4, 5]).isRequired
}

export default Stars;