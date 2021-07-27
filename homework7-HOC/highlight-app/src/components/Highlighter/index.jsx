const Highlighter = (WrappedComponent, NewWrapper, newRank, PopularWrapper, popularRank) => {
    return (props) => {
        if (props.views <= newRank) {
            return <NewWrapper><WrappedComponent {...props} /></NewWrapper>;
        } else if (props.views >= popularRank) {
            return <PopularWrapper><WrappedComponent {...props} /></PopularWrapper>;            
        } else {
            return <WrappedComponent {...props} />;              
        }
    };
}

export default Highlighter;