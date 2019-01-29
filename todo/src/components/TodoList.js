import React, {Component} from 'react';
import {connect} from 'react-redux';
import {addNew, toggleComplete} from '../actions';

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
                    <button onClick={this.addNew}>Submit</button>
                {/* </form> */}
                <div>
                    {this.props.todos.map(task => (
                        <div onClick={e => this.toggleComplete(e, task.id)} key={task.id} className={`${task.completed}`} >
                            <p>{task.value}</p>
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

export default connect(mapStateToProps, {addNew, toggleComplete})(TodoList);