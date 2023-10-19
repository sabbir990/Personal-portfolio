import React from 'react';
import todoList from '../assets/todoList.jpg';
import '../index.css'

export default function Project3() {
    return (
        <div>
            <div class="card card-3" style={{width: '15rem', textAlign: "center"}}>
                <img src={todoList} class="card-img-top" alt="todo List" style={{borderBottom : "1px solid black"}}/>
                    <div class="card-body">
                        <h5 class="card-title">Todo List</h5>
                        <a href="https://sabbir990.github.io/Todo-list/" target='_blank' class="btn btn-warning">Visit Application</a>
                    </div>
            </div>
        </div>
    )
}
