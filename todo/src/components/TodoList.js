import React, {Component} from 'react';
import {connect} from 'react-redux';
import {addNew, toggleComplete} from '../actions';

class TodoList extends Component {

    state = {
        newTask: ''
    }

    toggleComplete = (e, todo) => {
        e.preventDefault();
        this.props.toggleComplete(todo);
        console.log(this.props.completed);
    }

    addNew = value => {
        // e.preventDefault();
        this.props.addNew(value);
        console.log(this.props.todos);
    }

    handleChanges = e => {
        this.setState({ [e.target.name]: e.target.value});
      };

    render(){
        return(
            <div>
                <form onSubmit={() => this.handleAddNew(this.props.value)}>{}
                    <input 
                        value={this.props.value}
                        type='text'
                        name='newTask'
                        placeholder='Enter Task Name'
                        onChange={this.handleChanges}
                    />
                    <button type='submit'>Submit</button>
                </form>
                <div>
                    {this.props.todos.map(todo => (
                        <div onClick={e => this.handleToggleComplete(e, todo)} key={todo.id} className={`${todo.completed}`} >
                            {todo.value}
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