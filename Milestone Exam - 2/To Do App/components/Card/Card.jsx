import "./Card.css";

function Card({ index, changeStatus, todo, deleteTodo }) {
  return (
    <>
      <div className="col-3">
        <div className="card">
          <div className="card-body d-flex flex-column">
            <h5 className="card-title">
              {index}. {todo.title}
            </h5>
            <p className="card-text">Status: {todo.status}</p>
            <a
              className="btn btn-primary my-2"
              onClick={() => changeStatus(todo.id)}
            >
              Change Status
            </a>
            <a className="btn btn-danger my-2" onClick={() => deleteTodo(todo.id)}>
              Remove
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

export default Card;
