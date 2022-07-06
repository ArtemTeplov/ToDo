import React, {Component} from "react";
import './new-task-form.css';

export default class NewTaskForm extends Component {
    
    state = {
        label: ""
    };

    handleSubmit = (event) => {
        event.preventDefault();
        this.props.onAdd(this.state.label);
        this.setState({
            label: ''
        });
    };

    handleChange = (event) => {
        this.setState({
            label: event.target.value
        });
        
    };

    render() {
        return (
            <form
              onSubmit={this.handleSubmit}>
              <input className="new-todo"
                     onChange={this.handleChange}
                     value={this.state.label}
                     placeholder="What needs to be done?"
                     autoFocus />
            </form>
        );
    };
};

