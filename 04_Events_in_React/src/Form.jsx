function handleFormSubmit(){
    event.preventDefault();
    console.log("form was submitted");
}

export default function Form() {
    return (
        <form onSubmit={handleFormSubmit}>
            <input placeholder="write something" />
            <br /> <br />
            {/* <button onClick={handleFormSubmit}>Submit</button> */}
            <button>submit</button>
        </form>
    )
}