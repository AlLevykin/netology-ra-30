function ShopItemWraper({children}) {
    return (
        <div className="container">
            <div className="highlight-window">
                <div className="highlight-overlay" />
            </div>
            <div className="window">
                {children}
            </div>
        </div>
    );
}

export default ShopItemWraper;