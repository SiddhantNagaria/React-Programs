import Product from "./Product";
function ProductTab() {
    let styles = {
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "center",
        alignItems: "center"
    }
    return (
        <div style={styles}>
            <Product title="Logitech mouse" idx={0} />
            <Product title="redgear keyboard" idx={1} />
            <Product title="apple pen" idx={2} />
            <Product title="asus laptop" idx={3} />
        </div>
    )
};

export default ProductTab;