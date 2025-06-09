function Product({ title, price = 1, features = [] }) {
    const List = features.map((feature, index) => (
        <li key={index}>{feature}</li>
    ));

    return (
        <div className="Product">
            <h3>{title}</h3>
            <h5> Price: {price}</h5>
            <ul>{List}</ul>
            <hr />
        </div>
    );
}

export default Product;