import CardElement from "../CardElement";

function CardHeader(props) {
    return (
        <CardElement className={`card-header ${props.className}`}>
            {props.children}
        </CardElement>
    );
}

export default CardHeader;