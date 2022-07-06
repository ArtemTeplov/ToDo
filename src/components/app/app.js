import React, {Component} from "react";
import './app.css';
import TaskList from "../task-list";
import Footer from "../footer";
import NewTaskForm from "../new-task-form";


export default class App extends Component {

    currentID = 1;

    incrementID = () => {
        return this.currentID++;
    };

    createTask = (description, isDone = false, isEditing = false, createdDate = new Date(), id = this.incrementID()) => {
        return {
            description,
            isDone,
            isEditing,
            createdDate,
            id
        };
    };

    addTask = (label) => {
        const newTask = this.createTask(label);
        this.setState((state) => {
            const newTasksData = [...state.taskData, newTask];
            return {
                taskData: newTasksData
            };
        });
    };

    state = {
        taskData: [
            this.createTask("Completed task"),
            this.createTask("Editing task"),
            this.createTask("Active task")
        ],
        filter: "All"
    };

    findIndexByID = (id) => {
        return this.state.taskData.findIndex((task) => task.id === id);
    };

    toggleProperty = (property, id) => {
        this.setState((state) => {
            const index = this.findIndexByID(id);
            const modifiedTaskData = {...state.taskData[index],[property]: !state.taskData[index][property]};
            const modifiedTasksData = [...state.taskData.slice(0, index), modifiedTaskData,...state.taskData.slice(index + 1)];
            return {
                taskData: modifiedTasksData
            };
        });
    };

    deleteTask = (id) => {
        this.setState((state) => {
            const index = state.taskData.findIndex((task) => task.id === id);
            const newTaskData = [...state.taskData.slice(0, index), ...state.taskData.slice(index + 1)];
            return {
                taskData: newTaskData
            };
        });
    };

    handleFilterChange = (filter) => {
        this.setState({filter});
    };

    clearCompleted = () => {
        const activeTasks = this.state.taskData.filter((task) => !task.isDone);
        this.setState({
            taskData: activeTasks
        });
    };

    countActiveTasks = () => {
        return this.state.taskData.filter((task) => !task.isDone).length;
    };

    changeDescription = (description, id) => {
        this.setState((state) => {
            const index = this.findIndexByID(id);
            const modifiedTaskData = {...state.taskData[index], description};
            const modifiedTasksData = [...state.taskData.slice(0, index), modifiedTaskData, ...state.taskData.slice(index + 1)];
            return {
                taskData: modifiedTasksData
            };
        });
    };

    render() {

    return (
        <div>
        <section className="todoapp">
            <header className="header">
                <h1>todos</h1>
                <NewTaskForm
                    onAdd={this.addTask}/>
            </header>
        <section className="main">
            <TaskList 
                taskData={this.state.taskData}
                onToggleProperty={this.toggleProperty}
                filter={this.state.filter}
                onChangeDescription={this.changeDescription}
                onDelete={this.deleteTask}/>
            <Footer
                filter={this.state.filter}
                onFilterChange={this.handleFilterChange}
                onClearCompleted={this.clearCompleted}
                activeTasksCount={this.countActiveTasks}/>
      </section>
    </section>
    </div>
    );};
};
