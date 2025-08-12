import Product from "./Product";
function ProductTab() {
    let styles={
        display:"flex",
        alignItems: "center",
        flexWrap:"wrap",
        justifyContent:"center"
    }
    return (
        <div style={styles}>
            <Product title="Logitech Master" idx={0}/>
            <Product title="apple pencil 2nd gen" idx={1}/>
            <Product title="zebronics keyboard" idx={2}/>
            <Product title="hp omen" idx={3}/>
        </div>
    )
};

export default ProductTab;