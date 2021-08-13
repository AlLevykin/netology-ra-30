const Alert = ({ type, children }) =>
    <div className={`alert alert-${type} my-3`} role="alert">
        {children}
    </div>

export default Alert;