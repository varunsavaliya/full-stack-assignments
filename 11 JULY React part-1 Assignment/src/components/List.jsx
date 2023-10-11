function List(props) {
    return(
        <>
            {props.items.map((item, index) => (
                <li key={index}>{item}</li>
            ))}
        </>
    )
}

export default List;
