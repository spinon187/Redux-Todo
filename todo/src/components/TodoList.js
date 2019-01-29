import React, {Component} from 'react';
import {connect} from 'react-redux';
import {addNew, toggleComplete, deleteTask, clearCompleted} from '../actions';

class TodoList extends Component {

    state = {
        newTask: ''
    }

    toggleComplete = (e, id) => {
        e.preventDefault();
        this.props.toggleComplete(id);
        console.log(this.props.completed);
    }

    addNew = e => {
        e.preventDefault();
        this.props.addNew(this.state.newTask);
        console.log(this.props.todos);
    }

    deleteTask = (e, id) => {
        e.preventDefault();
        this.props.deleteTask(id);
    }

    clearCompleted = (e, x) => {
        e.preventDefault();
        this.props.clearCompleted(x);
    }

    handleChanges = e => {
        this.setState({ [e.target.name]: e.target.value});
      };

    render(){
        return(
            <div>
                {/* <form onSubmit={() => this.handleAddNew(this.props.value)}>{} */}
                    <input 
                        value={this.state.newTask}
                        type='text'
                        name='newTask'
                        placeholder='Enter Task Name'
                        onChange={this.handleChanges}
                    />
                    <button onClick={this.addNew}>Add Task</button>
                    <button onClick={this.clearCompleted}>Clear Completed</button>
                {/* </form> */}
                <div>
                    {this.props.todos.map((task, index) => (
                        <div onClick={e => this.toggleComplete(e, index)} key={index} className={`${task.completed}`} >
                            <p>{task.value}</p>
                            <button onClick={e => this.deleteTask(e, index)}>Delete Task</button>
                        </div>
                    ))}
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        todos: state.todos
    };
};

export default connect(mapStateToProps, {addNew, toggleComplete, deleteTask, clearCompleted})(TodoList);