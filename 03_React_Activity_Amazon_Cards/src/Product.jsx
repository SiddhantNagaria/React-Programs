import "./Product.css"
import Price from "./Price";
function Product({ title, idx }) {
    let oldPrice = ["1200", "1000", "4000", "1599"];
    let newPrice = ["999", "799", "2999", "1099"];
    let description = [
        ["best mouse", " 6 buttons", "3rd desc", "4th desc"],
        ["best keyboard", "RGB Lights", "3rd Desc", "4th Desc"],
        ["best keyboard", "RGB Lights", "3rd Desc", "4th Desc"],
        ["best keyboard", "RGB Lights", "3rd Desc", "4th Desc"]
    ];
    return (
        <div className="Product">
            <h4>{title}</h4>
            <p>{description[idx][0]}</p>
            <p>{description[idx][1]}</p>
            <Price oldPrice={oldPrice[idx]} newPrice={newPrice[idx]} />
        </div>
    );
}

export default Product;