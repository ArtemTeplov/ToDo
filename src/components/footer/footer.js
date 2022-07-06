import React from "react";
import './footer.css';
import TaskFilter from "../task-filter";

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

export default Footer;