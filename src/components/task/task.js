import React from 'react';
import './task.css';

const Task = (props) => {
  const {id, isDone, description, created, onToggleProperty, onDelete} = props;
        return (
              <div className="view">
                <input
                  className="toggle"
                  onChange={() => onToggleProperty('isDone', id)}
                  type="checkbox" checked={isDone}
                       />
                <label>
                  <span className="description">{description}</span>
                  <span className="created">{created}</span>
                </label>
                <button className="icon icon-edit"
                        onClick={() => onToggleProperty('isEditing', id)}
                ></button>
                <button className="icon icon-destroy"
                        onClick={() => onDelete(id)}></button>
              </div>
        );
};

export default Task;