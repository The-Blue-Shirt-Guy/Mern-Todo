// for adding in database
export async function addTodoInDataBase(data) {
  const addTask = await fetch(
    "https://mern-todo-app-roan.vercel.app/api/v1/tasks",
    {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    }
  );
  const getData = await addTask.json();

  return getData;
}

///    for deleting from database
export async function DeleteFromDataBase(id) {
  const addTask = await fetch(
    `https://mern-todo-app-roan.vercel.app/api/v1/tasks/${id}`,
    {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
    }
  );
  const getData = await addTask.json();
}

///    for update from database
export async function updateDataBase(item) {
  const updateTask = await fetch(
    `https://mern-todo-app-roan.vercel.app/api/v1/tasks/${item.id}`,
    {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ title: item.title, task: item.task }),
    }
  );
  const updatedData = await updateTask.json();
  return updatedData;
}
