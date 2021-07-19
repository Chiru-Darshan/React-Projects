import Header from "./components/Header";
import Tasks from "./components/Tasks";
import { useState } from "react";
import AddTask from "./components/AddTask";

function App() {
  const [showAddTask, setShowAddTask] = useState(false);
  const [tasks, setTasks] = useState([
    {
      Id: 1,
      text: "Doctors Appointment",
      day: " Feb 26th 2021, 6:00 PM",
      reminder: true,
    },
    {
      Id: 2,
      text: "Mobile Recharge",
      day: " Mar 6th 2021, 6:00 PM",
      reminder: true,
    },
    {
      Id: 3,
      text: "Vehicle Insurance Renewal",
      day: " Dec 26th 2021, 8:00 AM",
      reminder: true,
    },
  ]);

  // Delete Tasks
  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.Id !== id));
  };

  // Toggle Reminder
  const toggleReminder = (id) => {
    setTasks(
      tasks.map((task) =>
        task.Id === id ? { ...task, reminder: !task.reminder } : task
      )
    );
  };

  // Add Task
  const onAddTask = (task) => {
    const Id = tasks.length + 1;
    const newTask = { Id, ...task };
    setTasks([...tasks, newTask]);
  };

  return (
    <div className="container">
      <Header
        title="Task Manager"
        onAdd={() => setShowAddTask(!showAddTask)}
        showAdd={showAddTask}
      />
      {showAddTask && <AddTask onAddTask={onAddTask} />}
      {tasks.length > 0 ? (
        <Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder} />
      ) : (
        "No Tasks To Show"
      )}
    </div>
  );
}

export default App;
