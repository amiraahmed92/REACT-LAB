import {TODO} from "../TODO";

export const VIEWTODO =(props) => {
    return(
    <div className="card p-2 m-2" style={{ height: "95vh" }}>
      <h1>MY TODO LIST</h1>
      <button className="btn btn-danger m-2" onClick={props.onDelete}>
        Delete
      </button>
      {props.todos.map((todo) => (
        <TODO title={todo.title} body={todo.body} />
      ))}
    </div>
  );
};