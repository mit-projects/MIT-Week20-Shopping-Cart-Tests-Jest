
const Todo = ({ index, todo, removeTodo, completeTodo }) => {
    const deleteTask = () => {
        removeTodo(index);
    }
    const markComplete = () => {
        completeTodo(index);
    }
    return (
        <div className="todo-item-container">
            <div className="todo-item" key={index} id={`${index}`}>{todo.text}</div>
            {!todo.complete &&
                <div className="icons">
                    <img src="./images/checkmark.png" className="delete-image" onClick={markComplete} alt="Mark as completed." />
                    <img src="./images/delete.png" className="delete-image" onClick={deleteTask} alt="Delete Task." />
                </div>
            }
        </div>
    )
}
export default Todo