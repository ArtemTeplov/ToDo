import React from "react";
import './task-list.css';
import Task from "../task";


    
const TaskList = (props) => {

    const {onChangeDescription, onToggleProperty, onDelete} = props;
    const taskData = props.taskData.map((task) => {
        const {isDone, isEditing, description, id,} = task;
        if ((props.filter === "Completed" && !isDone) ||
            (props.filter === "Active" && isDone)) {
            return null;
        }
        const inputField = isEditing ? 
              <input type="text" 
                     className="edit" 
                     value={description} 
                     onChange={(event) => onChangeDescription(event.target.value, task.id)} />
        : null;

        let classNames = "";
        if (isDone) {
            classNames += " completed";
        }
        if (isEditing) {
            classNames += " editing";
        }
        
        return (
            <li className={classNames} key={id}>
              <Task {...task}
                    onToggleProperty={onToggleProperty}
                    onDelete={onDelete}
                />
              {inputField}
            </li>
        );
    });

    return (
        <ul className="todo-list">
          {taskData}
        </ul>
    );
};
    


export default TaskList;