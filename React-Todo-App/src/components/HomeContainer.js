import React from "react";
import Form from "./Form";
import TodoContainer from "./TodoContainer";
import { addTodoInDataBase, DeleteFromDataBase, updateDataBase } from "./utils";
import { useState, useEffect } from "react";

const HomeContainer = () => {
  /// states
  const [todoList, setTodoList] = useState();
  const [inputValue, setInputValue] = useState("");
  const [TitleValue, setTitleValue] = useState("");
  const [isEditing, setIsEditing] = useState(false);
  const [editId, setEditId] = useState("");
  const [isSaving, setIsSaving] = useState(false);

  /// ==============================
  //       crud functions
  /// ==============================

  //create todo
  async function addTask(key) {
    if (inputValue !== "" && TitleValue !== "") {
      if (!isEditing) {
        setIsSaving(true);
        const addData = await addTodoInDataBase({
          task: inputValue,
          title: TitleValue,
        });
        setTodoList([
          ...todoList,
          {
            task: addData.Task.task,
            title: addData.Task.title,
            _id: addData.Task.title,
            completed: false,
          },
        ]);

        setInputValue("");
        setTitleValue("");

        setIsSaving(false);
      } else {
        if (key.data._id) {
          setIsSaving(true);
          const updatedData = updateDataBase({
            id: key.data._id,
            task: inputValue,
            title: TitleValue,
          });
          updatedData.then((data) => {
            setTodoList(
              todoList.map((item) => {
                if (item._id === data.Task._id) {
                  return {
                    ...item,
                    task: inputValue,
                    title: TitleValue,
                  };
                }
                return item;
              })
            );
          });
          setIsSaving(false);
        }

        setTitleValue("");
        setInputValue("");
        setIsEditing(false);
        setEditId("");
      }
    }
    // else alert("please fil all fields");
  }

  // read all tasks
  useEffect(() => {
    async function fetchData() {
      const data = await fetch(
        "https://mern-todo-app-roan.vercel.app/api/v1/tasks"
      );
      const tasksdata = await data.json();
      setTodoList(tasksdata);
    }
    fetchData();
  }, []);

  //  for updating data
  const editTask = (key, valueObj) => {
    setIsEditing(true);
    setInputValue(valueObj.task);
    setTitleValue(valueObj.title);
    setEditId({ key: key, data: valueObj });
  };

  // for changing  complete
  const completeTask = (key) => {
    setTodoList(
      todoList.map((item, index) => {
        if (index === key) {
          return { ...item, completed: !item.completed };
        }
        return item;
      })
    );
  };

  // delete data
  const deleteTask = async (id, key) => {
    console.log("first");
    setTodoList((prevList) =>
      prevList.filter((listItem, index) => index !== key)
    );
    if (id) {
      DeleteFromDataBase(id);
    }
  };

  return (
    <>
      <Form
        inputValue={inputValue}
        TitleValue={TitleValue}
        setTitleValue={setTitleValue}
        setInputValue={setInputValue}
        editId={editId}
        isEditing={isEditing}
        setIsEditing={setIsEditing}
        addTask={addTask}
        isSaving={isSaving}
      />
      <hr />
      <TodoContainer
        editTask={editTask}
        todoList={todoList}
        completeTask={completeTask}
        deleteTask={deleteTask}
      />
    </>
  );
};

export default HomeContainer;