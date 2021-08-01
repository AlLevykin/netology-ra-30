const DateToString = (value) => {
    const date = new Date(value);
    return date.toLocaleDateString();
}

export default DateToString;