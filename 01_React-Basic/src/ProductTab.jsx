import Product from "./Product";

function ProductTab() {
    return (
        <>
            <Product title="phone" price={30000} />
            <Product title="Laptop" price={80000} />
            <Product title="Pen" /> {/* price is automatically set to 1 from Product.jsx*/}
        </>
    )
};

export default ProductTab;