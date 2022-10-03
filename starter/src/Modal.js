import React from "react";
import { closeModal } from "./features/modal/modalSlice";
import { remove } from "./features/todoSlice";
import { useDispatch } from "react-redux";

const Modal = ({ id }) => {
  const dispatch = useDispatch();
  console.log(id);
  return (
    <aside>
      <div>remove item ? </div>
      <button
        onClick={() => {
          dispatch(remove(id));
          dispatch(closeModal());
        }}
      >
        Remove
      </button>
      <button onClick={() => dispatch(closeModal())}>Cancel</button>
    </aside>
  );
};

export default Modal;
