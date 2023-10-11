function Button({ text, onClick }) {
    onClick = () =>{
        console.log('function called');
    }
    return(
        <>
            <button onClick={onClick}>{text}</button>
        </>
    )
}

export default Button;
