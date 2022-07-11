import React from 'react';
import './task-list.css';
import Task from '../task';
import PropTypes from 'prop-types';

const TaskList = ({ taskData, filter, onFinishEditing, onChangeDescription, onToggleProperty, onDelete }) => {
  const tasks = taskData.map((task) => {
    if ((filter === 'Completed' && !task.isDone) || (filter === 'Active' && task.isDone)) {
      return null;
    }

    const inputField = task.isEditing ? (
      <form
        onSubmit={(event) => {
          event.preventDefault();
          onFinishEditing(task.id);
        }}
      >
        <input
          type="text"
          className="edit"
          value={taskData.description}
          onChange={(event) => onChangeDescription(event.target.value, task.id)}
        />
      </form>
    ) : null;

    let classNames = '';
    if (task.isDone) {
      classNames += ' completed';
    }
    if (task.isEditing) {
      classNames += ' editing';
    }

    return (
      <li className={classNames} key={task.id}>
        <Task {...task} onToggleProperty={onToggleProperty} onDelete={onDelete} />
        {inputField}
      </li>
    );
  });

  return <ul className="todo-list">{tasks}</ul>;
};

TaskList.defaultProps = {
  filter: 'All',
  taskData: [],
};

TaskList.propTypes = {
  filter: PropTypes.oneOf(['All', 'Active', 'Completed']),
  onChangeDescription: PropTypes.func.isRequired,
  onDelete: PropTypes.func.isRequired,
  onFinishEditing: PropTypes.func.isRequired,
  onToggleProperty: PropTypes.func.isRequired,
  taskData: PropTypes.arrayOf(PropTypes.object),
};

export default TaskList;