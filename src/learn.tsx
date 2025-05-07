import React, {useState, useEffect} from "react";
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './learn.scss'


createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <TodoList />
  </StrictMode>,
)

function TodoList() {
    // useState 用于定义组件的状态
    // todos 是一个数组，包含了所有的任务
    // setTodos 是一个函数，用于更新 todos 的状态
    const [todos, setTodos] = useState(() => {
        // savedTodos 是从 localStorage 中获取的任务列表
        const savedTodos = localStorage.getItem("todos");
        return savedTodos ? JSON.parse(savedTodos) :
        [
            {id:1, text:"learn React", completed:false},
            {id:2, text:"learn Vite", completed:false},
            {id:3, text:"learn ES6", completed:true},
            {id:4, text:"learn TypeScript", completed:false},
            {id:5, text:"learn SCSS", completed:false},
            {id:6, text:"learn SQL", completed:false},
            {id:7, text:"learn Python", completed:false},
            {id:8, text:"learn ADO", completed:false},
            {id:9, text:"learn Git", completed:false},
            {id:10, text:"learn Responsive Web Design", completed:false}
        ];
    });

    // newTodo 是一个字符串，用于输入新的任务
    // setNewTodo 是一个函数，用于更新 newTodo 的状态
    const [newTodo,setNewTodo] = useState("");

    // useEffect 用于监听组件的状态变化，并作出相应的更新
    useEffect(() => {
        localStorage.setItem("todos", JSON.stringify(todos));
    },[todos])

    // 添加新任务
    const addTodo = () => {
        if(newTodo.trim() === "") {
            return alert("Please enter a task");
        }

        const newTodoItem = {
            id: Date.now(), // 使用当前时间戳作为唯一 ID
            text: newTodo,
            completed: false
        }
        setTodos([newTodoItem,...todos]); // 更新任务列表，添加新任务
        setNewTodo(""); // 清空输入框
    };

    // 更新任务状态
    const toggleTodo = (id) => {
        setTodos(todos.map(todo => 
            todo.id === id ? {...todo, completed:!todo.completed} : todo
        ));
    };

    // 删除任务
    const deleteTodo = (id) => {
        setTodos(todos.filter(todo => todo.id !== id))
    };

    // 清空所有任务
    const clearTodos = () => {
        if(window.confirm("Are you sure you want to clear all your tasks?")) {
            setTodos([]);
        }
    };

    return (
        <div className="todo-list">
            <h1>Todo List</h1>
            {/* 任务输入框 */}
            <div className="todo-input">
                <input 
                    type="text" 
                    placeholder="Add new todo" 
                    value={newTodo}
                    onChange = {(e) => setNewTodo(e.target.value)} // 更新输入框的值
                    onKeyDown={
                        (e) => {
                            e.key === "Enter" && addTodo()
                            // 按下回车键时，添加新任务
                        }
                    }
                />
                <button 
                    className="submit-button" 
                    type="submit" 
                    onClick={() => addTodo()}
                >
                    Add
                </button>
            </div>
            
            {/* 任务列表展示 */}
            <ul >
                {todos.map(todo => (
                    <li  
                        key={todo.id}
                        style={{
                            textDecoration: todo.completed ? "line-through" :"none",
                            color: todo.completed ? "gray" : "black"
                        }}
                    >
                        <input 
                            type="checkbox" 
                            onClick={() => toggleTodo(todo.id)} 
                            hidden={false} 
                            checked={todo.completed} 
                        />
                        <span>{todo.text}</span>
                        <button
                            className="delete-button"
                            onClick={() => deleteTodo(todo.id)}>
                            X 
                        </button>
                    </li>
                ))}
            </ul>

            {/* 清空所有任务*/}
            {todos.length > 0 && (
                <button
                    className="clear-button"
                    onClick={() => clearTodos()}>
                    清空所有任务
                </button>
            )}
        </div>
    );
}
