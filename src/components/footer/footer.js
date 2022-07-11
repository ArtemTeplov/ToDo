import React from "react";
import './footer.css';
import TaskFilter from "../task-filter";
import PropTypes from 'prop-types';

const Footer = (props) => {
  const {activeTasksCount, filter, onFilterChange, onClearCompleted} = props;
  return (
      <footer className="footer">
        <span className="todo-count">{activeTasksCount()} items left</span>
        <TaskFilter
          filter={filter}
          onFilterChange={onFilterChange}
        />
        <button
          onClick={onClearCompleted}
          className="clear-completed">Clear completed</button>
      </footer>
  );
};

Footer.propTypes = {
  onFilterChange: PropTypes.func.isRequired,
  onClearCompleted: PropTypes.func.isRequired,
  activeTasksCount: PropTypes.func.isRequired,
};

export default Footer;