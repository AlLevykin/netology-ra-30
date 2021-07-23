import CardElement from "../CardElement";

function CardFooter(props) {
    return (
        <CardElement className={`card-footer ${props.className}`}>
            {props.children}
        </CardElement>
    );
}

export default CardFooter;