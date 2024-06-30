import React, { Component } from 'react';

class ListToDo extends Component {

    state = {
        listTodos: [
            { id: 'todo1', title: 'Doing Homework' },
            { id: 'todo2', title: 'Doing Homework 2 ' },
            { id: 'todo3', title: 'Doing Homework 3 ' },
        ]
    }


    render() {
        let { listTodos } = this.state;
        return (
            <div className='list-todo-container'>
                <div className='add-todo'>
                    <input type="text" />
                    <button type="button">Add</button>
                </div>
                <div className='list-todo-content'>
                    <div className='todo-child'>Todo 1</div>
                    <div className='todo-child'>Todo 1</div>
                    <div className='todo-child'>Todo 1</div>
                </div>

            </div>
        );
    }
}

export default ListToDo;