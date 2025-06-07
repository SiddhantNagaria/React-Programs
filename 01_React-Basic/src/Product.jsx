function Product({ title, price = 1, features = [] }) {
    return (
        <div className="Product">
            <h3>{title}</h3>
            <h5> Price: {price}</h5>
            <p>{features}</p>
            <p>{features[0]}</p>
            <hr />
        </div>
    );
}

export default Product;