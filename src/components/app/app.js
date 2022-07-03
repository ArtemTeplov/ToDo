import React, {Component} from "react";
import './app.css';
import TaskList from "../task-list";
import Footer from "../footer";
import NewTaskForm from "../new-task-form";


export default class App extends Component {

    state = {
        taskData : [
            {classStatus: "completed", description: "Completed task", created: "created 17 seconds ago", id: 1},
            {classStatus: "editing", description: "Editing task", created: "created 5 minutes ago", id: 2},
                                    {description: "Active task", created: "created 5 minutes ago", id: 3}
        ]
    }

    deleteTask = (id) => {
        this.setState((state) => {
            const index = state.taskData.findIndex((task) => task.id === id);
            const newTaskData = [...state.taskData.slice(0, index), ...state.taskData.slice(index + 1)];
            return {
                taskData: newTaskData
            };
        });
    };

    render() {

    return (
        <section className="todoapp">
            <header className="header">
                <h1>todos</h1>
                <NewTaskForm/>
            </header>
        <section className="main">
            <TaskList 
            taskData={this.state.taskData}
            onDelete={this.deleteTask}/>
            <Footer/>
      </section>
    </section>
    );
    };
};
