import "./Product.css"
import Price from "./Price";
function Product({ title, idx }) {
    let oldPrice = ["1200", "1000", "4000", "1599"];
    let newPrice = ["999", "799", "2999", "1099"];
    let description = [["best mouse", " 6 buttons"], ["best keyboard","RGB Lights"], ["best pen","cheapest"], ["best laptop", "budget friendly"]];
    return (
        <div className="Product">
            <h3>{title}</h3>
            <p>{description[idx][0]}</p>
            <p>{description[idx][1]}</p>
            <Price oldPrice={oldPrice[idx]} newPrice={newPrice[idx]} />
        </div>
    );
}

export default Product;