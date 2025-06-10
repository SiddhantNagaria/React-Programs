function Product({ title, price = 1, features = [] }) {
    const List = features.map((feature, index) => (
        <li key={index}>{feature}</li>
    ));
    let isDiscount = price >20000 ? "Discount of 5%" : "";
    let styles = {backgroundColor : price >20000 ? "pink" : ""};
    if (price > 20000) {
        return (
            <div className="Product" style={styles}>
                <h3>{title}</h3>
                <h5> Price: {price}</h5>
                <p>{isDiscount}</p>
                <hr />
            </div>
        );
    } else {
        return (
            <div className="Product">
                <h3>{title}</h3>
                <h5> Price: {price}</h5>
                <ul>{List}</ul>
                <hr />
            </div>
        )
    }
}

export default Product;