import React from 'react';
import PropTypes from 'prop-types';

import './app.css';

import TaskList from '../task-list';
import Footer from '../footer';
import NewTaskForm from '../new-task-form';

export default class App extends React.Component {
  constructor(props) {
    super(props);

    this.initialTasks = [
      {
        description: 'Completed task',
      },
      {
        description: 'Editing task',
      },
      {
        description: 'Active task',
      },
    ];

    this.currentID = 1;

    this.incrementID = () => {
      this.currentID += 1;
      return this.currentID;
    };

    this.createTask = (description) => {
      return {
        description,
        isDone: false,
        isEditing: false,
        createdDate: new Date(),
        id: this.incrementID(),
      };
    };

    this.addTask = (label) => {
      const newTask = this.createTask(label);

      this.setState((state) => {
        const newTasksData = [...state.tasksData, newTask];

        return {
          tasksData: newTasksData,
        };
      });
    };

    const { initialFilter } = this.props;

    this.state = {
      taskData: this.initialTasks.map((task) => {
        return this.createTask(task.description);
      }),
      filter: initialFilter,
    };

    this.findIndexByID = (id) => {
      const { taskData } = this.state;

      return taskData.findIndex((task) => task.id === id);
    };

    this.toggleProperty = (property, id) => {
      this.setState((state) => {
        const index = this.findIndexByID(id);

        const modifiedTaskData = {
          ...state.taskData[index],
          [property]: !state.taskData[index][property],
        };

        const modifiedTasksData = [
          ...state.taskData.slice(0, index),
          modifiedTaskData,
          ...state.taskData.slice(index + 1),
        ];

        return {
          taskData: modifiedTasksData,
        };
      });
    };

    this.deleteTask = (id) => {
      this.setState((state) => {
        const index = this.findIndexByID(id);

        const newTasksData = [...state.taskData.slice(0, index), ...state.taskData.slice(index + 1)];

        return {
          taskData: newTasksData,
        };
      });
    };

    this.handleFilterChange = (newFilter) => {
      this.setState({
        filter: newFilter,
      });
    };

    this.clearCompleted = () => {
      const { tasksData } = this.state;

      const activeTasks = tasksData.filter((task) => !task.isDone);

      this.setState({
        taskData: activeTasks,
      });
    };

    this.countActiveTasks = () => {
      const { taskData } = this.state;

      return taskData.filter((task) => !task.isDone).length;
    };

    this.changeDescription = (description, id) => {
      this.setState((state) => {
        const index = this.findIndexByID(id);

        const modifiedTaskData = {
          ...state.taskData[index],
          description,
        };

        const modifiedTasksData = [
          ...state.taskData.slice(0, index),
          modifiedTaskData,
          ...state.taskData.slice(index + 1),
        ];

        return {
          taskData: modifiedTasksData,
        };
      });
    };

    this.finishEditing = (id) => {
      this.setState((state) => {
        const index = this.findIndexByID(id);

        const modifiedTaskData = {
          ...state.taskData[index],
          isEditing: false,
        };

        const modifiedTasksData = [
          ...state.taskData.slice(0, index),
          modifiedTaskData,
          ...state.taskData.slice(index + 1),
        ];

        return {
          taskData: modifiedTasksData,
        };
      });
    };
  }

  render() {
    const { taskData, filter } = this.state;

    return (
      <div>
        <section className="todoapp">
          <header className="header">
            <h1>todos</h1>
            <NewTaskForm onAdd={this.addTask} />
          </header>
          <section className="main">
            <TaskList
              tasksData={taskData}
              onToggleProperty={this.toggleProperty}
              filter={filter}
              onChangeDescription={this.changeDescription}
              onFinishEditing={this.finishEditing}
              onDelete={this.deleteTask}
            />
            <Footer
              filter={filter}
              onFilterChange={this.handleFilterChange}
              onClearCompleted={this.clearCompleted}
              activeTasksCount={this.countActiveTasks}
            />
          </section>
        </section>
      </div>
    );
  }
}

App.defaultProps = {
  initialFilter: 'All',
};

App.propTypes = {
  initialFilter: PropTypes.oneOf(['All', 'Active', 'Completed']),
};
