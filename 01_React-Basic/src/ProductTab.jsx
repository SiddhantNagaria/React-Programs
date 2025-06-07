import Product from "./Product";

function ProductTab() {
    let features = ["hi-tech", 'durable', "fast"];
    // let options = { a: "hi-tech", b: "durable", c: "fast" };
    return (
        <>
            <Product title="phone" price={30000} features={features} />
            <Product title="Laptop" price={80000} />
            <Product title="Pen" /> {/* price is automatically set to 1 from Product.jsx*/}
        </>
    )
};

export default ProductTab;