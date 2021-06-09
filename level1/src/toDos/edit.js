import React, { useState } from "react";

const Item = ({ data, setData}) => {
  const [edit, setEdit] = useState(false);
  const [todo] = useState(data.title);

  const handleEdit = () => {
    setEdit(!edit);
  };

 
  return (
    <div className="todo">
      {!edit ? (
        <>
          <input
            type="checkbox"
            checked={todoItem.completed}
            onChange={() => completedTodo(todoItem.id)}
            disabled={todoItem.completed ? true : false}
          />
          <span>{todoItem.task}</span>
          <button onClick={handleEdit} disabled={todoItem.completed}>
            Edit
          </button>
        </>
      ) : (
        <>
       <input
            type="text"
            value={todo}
            name="todo"
        />
          <button onClick={handleEdit}>Cancel</button>
          <button type="submit">
            Save
          </button>
        </>
      )}
    </div>
  );
};