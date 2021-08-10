import { useDispatch } from 'react-redux';
import { ArrowClockwise } from 'react-bootstrap-icons';
import { fetchServices } from '../../actions/actionCreators';

const ErrorMessage = ({ text }) => {

    const dispatch = useDispatch();

    const handleClick = () => dispatch(fetchServices());

    return (
    <div className="alert alert-danger my-3" role="alert">
        <button className="btn btn-danger mx-3" type="button" onClick={handleClick}>
            <ArrowClockwise />
        </button>
        {text}
    </div>
    );
}

export default ErrorMessage;
