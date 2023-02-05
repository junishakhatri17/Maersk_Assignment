
const Todolist = ({todo, onChangeItem}) =>  {

  return (
    <div>
        <p className="title">To Do!!</p>
        {todo.map((item) => (
            <li key={item.id} className="todoList">
                <input type="checkbox" className='checkboxItem'  checked={item.completed}  onChange ={() => onChangeItem(item.id)}/>
                <span className="todoIndex">{item.id}.</span>
                <span className="todoItem">{item.todo}</span>
            </li>
        ))}
    </div>
  );
}

export default Todolist;
