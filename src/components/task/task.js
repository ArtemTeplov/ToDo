import React from 'react';
import './task.css';
import PropTypes from 'prop-types';
import {formatDistanceToNow} from 'date-fns';


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
                  <span className="created">{formatDistanceToNow(created)}</span>
                </label>
                <button className="icon icon-edit"
                        onClick={() => onToggleProperty('isEditing', id)}
                ></button>
                <button className="icon icon-destroy"
                        onClick={() => onDelete(id)}></button>
              </div>
        );
};

Task.defaultProps = {
  description: '',
  isDone: false,
  created: new Date(),
  id: 0,
};

Task.propTypes = {
  description: PropTypes.string,
  isDone: PropTypes.bool,
  created: PropTypes.instanceOf(Date),
  id: PropTypes.number,
  onToggleProperty: PropTypes.func.isRequired,
  onDelete: PropTypes.func.isRequired,
};

export default Task;