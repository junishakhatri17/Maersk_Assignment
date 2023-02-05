const TodoListCompleted = ({completedItems}) =>  {

  return (
    <div>
      <p className="title">I did it!!</p>
      <div className="completedItems">
      {completedItems.map((item) => (
        <span className="todoCompletedItem">{item.todo}</span>
      ))}
      </div>
    </div>
  );
}

export default TodoListCompleted;