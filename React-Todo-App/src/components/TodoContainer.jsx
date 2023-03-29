import React from "react";
import { FaEdit, FaCheck } from "react-icons/fa";
import { AiTwotoneDelete } from "react-icons/ai";

const TodoContainer = ({ editTask, deleteTask, completeTask, todoList }) => {
  return (
    <div>
      <div className="todo-container">
        {todoList?.map((valueObj, key) => {
          return (
            <div className="todo-item" key={key}>
              <div className="todo-title">{valueObj.title}</div>
              <div className="todo-details">
                <div
                  className={
                    valueObj.completed
                      ? "todo-item-value completed-task"
                      : "todo-item-value"
                  }
                >
                  {valueObj.task}
                </div>
                <div className="btns">
                  <button onClick={() => editTask(key, valueObj)}>
                    <FaEdit />
                  </button>
                  <button onClick={() => deleteTask(valueObj._id, key)}>
                    <AiTwotoneDelete />
                  </button>
                  <button onClick={() => completeTask(key, valueObj._id)}>
                    <FaCheck />
                  </button>
                </div>
              </div>
            </div>
          );
        })}
        todo container
      </div>
    </div>
  );
};

export default TodoContainer;
