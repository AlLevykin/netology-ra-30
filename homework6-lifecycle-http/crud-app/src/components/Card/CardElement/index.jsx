function CardElement(props) {
    return (
        <>
            {
                props.children &&
                <div className={props.className}>
                    {props.children}
                </div>
            }
        </>
    );
}

export default CardElement;