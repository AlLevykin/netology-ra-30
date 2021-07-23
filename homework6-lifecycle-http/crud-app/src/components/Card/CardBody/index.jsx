import CardElement from "../CardElement";

function CardBody(props) {
    return (
        <CardElement className={`card-body ${props.className}`} >
            {props.children}
        </CardElement>
    );
}

export default CardBody;