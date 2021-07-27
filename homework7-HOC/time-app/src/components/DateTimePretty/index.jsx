const DateTimePretty = (WrappedComponent, dateFormatter) => {
    return (props) => WrappedComponent({...props, date: dateFormatter(props.date)});
}

export default DateTimePretty;