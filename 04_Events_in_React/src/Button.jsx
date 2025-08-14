function printHello() {
    console.log("Hello");
}

function printBye() {
    console.log("Bye");
}

export default function Button() {
    return (
        <div>
            <button onClick={printHello}>
                click me
            </button>
            <p onClick={printBye}>Lorem ipsum dolor sit amet.</p>
        </div>
    )
}

