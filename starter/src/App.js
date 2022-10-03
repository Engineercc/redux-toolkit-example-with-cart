// @ts-nocheck
import React, { useState, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { openModal } from "./features/modal/modalSlice";
import { add, completedItem, updateItem } from "./features/todoSlice";
import Modal from "./Modal";
import { useEffect } from "react";

function App() {
  const [title, setTitle] = useState("");
  const [myId, setMyId] = useState();
  const [newTitle, setNewTitle] = useState("");
  const todos = useSelector((store) => store.todos);
  const { isOpen } = useSelector((store) => store.modal);
  const dispatch = useDispatch();

  const editingItemRef = useRef(null);

  const removeDisabled = () => {
    let disabledValue = editingItemRef.current.removeAttribute("disabled");
    return disabledValue;
  };

  useEffect(() => {}, [newTitle]);

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(add(title));
    setNewTitle(title);
    setTitle("");
  };

  return (
    <div className="App">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        {console.log()}
        <button type="submit">Add</button>
      </form>
      <ul>
        {todos.map((todo) => {
          const { id, title, completed } = todo;
          return (
            <>
              <li key={id}>
                <input
                  type="text"
                  value={title}
                  ref={editingItemRef}
                  onChange={(e) => {setNewTitle(e.target.value)}}
                />
                <button
                  onClick={() => {
                    dispatch(openModal());
                    setMyId(id);
                  }}
                >
                  Delete
                </button>
                <button
                  onClick={() => {
                    removeDisabled();
                    dispatch(updateItem({ id: id, title: newTitle }));
                  }}
                >
                  asdadsads
                </button>
                <button onClick={() => dispatch(completedItem(id))}>
                  {completed ? "completed" : "uncompleted"}
                </button>
              </li>
            </>
          );
        })}
      </ul>
      {isOpen && <Modal id={myId} />}
    </div>
  );
}
export default App;
