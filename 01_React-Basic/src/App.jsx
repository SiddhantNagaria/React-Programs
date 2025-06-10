import "./App.css"
import Title from "./TItle"
import Product from "./Product"
import ProductTab from "./ProductTab"
import MsgBox from "./MsgBox"

function App() {
  return (
    <div>
      {/* <Title /> */}
      <>
        <MsgBox username="siddhant" textColor="green" />
        <MsgBox username="Rahul" textColor="Blue" />
        <ProductTab />
      </>


      {/* <Product/> */}
      {/* <h1>Hello World !This is my App component</h1> */}
    </div>
  )
}

export default App
