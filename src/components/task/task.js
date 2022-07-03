import React, {Component} from "react";
import './task.css';

export default class Task extends Component {

  state = {
    isDone: false,
  }

 toggleDone = () => {
    this.setState((state) => {
      return {
        isDone: !state.isDone
      }
    })
  };


 
  render(){
  const {classStatus, description, created, id, onDelete} = this.props;
  const inputField = classStatus === "editing" ? <input type="text" className="edit" value="Editing task" /> : null;
  const {isDone} = this.state;
  let classNames = '';
  if (isDone) {
    classNames += "completed";
  };

    return (
        <li className={classNames} key={id}>
            <div className="view">
              <input className="toggle" type="checkbox"
                      onClick={this.toggleDone}/>   
              <label>
                <span className="description">{description}</span>
                <span className="created">{created}</span>
              </label>
              <button className="icon icon-edit"></button>
              <button className="icon icon-destroy"
                      onClick={() => {onDelete(id)}}></button>
            </div>
          {inputField}
          </li>
    );
};
};

