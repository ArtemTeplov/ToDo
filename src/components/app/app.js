import React from "react";
import './app.css';
import TaskList from "../task-list";
import Footer from "../footer";
import NewTaskForm
 from "../new-task-form";
const App = () => {

const taskData = [
    {classStatus: "completed", description: "Completed task", created: "created 17 seconds ago", id: 1},
    {classStatus: "editing", description: "Editing task", created: "created 5 minutes ago", id: 2},
    {description: "Active task", created: "created 5 minutes ago", id: 3}
]

    return (
        <section className="todoapp">
            <header className="header">
                <h1>todos</h1>
                <NewTaskForm/>
            </header>
        <section className="main">
            <TaskList 
            taskData={taskData}/>
            <Footer/>
      </section>
    </section>
    );
};

export default App;