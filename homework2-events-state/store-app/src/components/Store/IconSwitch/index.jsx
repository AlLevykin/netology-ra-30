import PropTypes from 'prop-types';

function IconSwitch({icon, onClick}) {
    return (
        <button onClick={onClick}><span className="material-icons">{icon}</span></button>
    );
}

IconSwitch.propTypes = {
    icon: PropTypes.string.isRequired,
    onClick: PropTypes.func.isRequired
}

export default IconSwitch;