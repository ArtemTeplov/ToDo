import React, { useState } from 'react';
import PropTypes from 'prop-types';

import './new-task-form.css';

const NewTaskForm = ({ onAdd, initialLabel }) => {
  const [label, setLabel] = useState(initialLabel);
  const handleSubmit = (event) => {
    event.preventDefault();
    onAdd(label);
    setLabel(initialLabel);
  };

  return (
    <form onSubmit={handleSubmit} className="new-todo-form" id="add-task">
      <input
        form="add-task"
        className="new-todo"
        onChange={(event) => setLabel(event.target.value)}
        value={label}
        placeholder="Task"
      />
    </form>
  );
};

NewTaskForm.defaultProps = {
  initialLabel: '',
};

NewTaskForm.propTypes = {
  initialLabel: PropTypes.string,
  onAdd: PropTypes.func.isRequired,
};

export default NewTaskForm;
