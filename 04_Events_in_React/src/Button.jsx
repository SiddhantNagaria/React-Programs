function printHello() {
    console.log("Hello");
}

function printBye() {
    console.log("Bye");
}

function mouseOver(){
    console.log("mouse over para");
}

function dblclick(event){
    console.log("you doubled click the button");
    console.log(event);
    console.log(event.target);
    console.log(event.type);
}

export default function Button() {
    return (
        <div>
            <button onClick={printHello}>
                click me
            </button>
            <p onClick={printBye}>Lorem ipsum dolor sit amet.</p>

            <p onMouseOver={mouseOver}>Lorem ipsum dolor sit amet.</p>
            <button onDoubleClick={dblclick}>double click me</button>
        </div>
    )
}

