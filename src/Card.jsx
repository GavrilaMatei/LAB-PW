
function Card(props) {
    if(props.done)
        return (
            <div>
                <h3 className = "cardDone" >{props.title}</h3>
                <p>{props.description}</p>
            </div>
    );
    else
        return (
            <div>
                <h3 className ="cardNotDone" >{props.title}</h3>
                <p>{props.description}</p>
            </div>
    );
}
export default Card;