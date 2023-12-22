import React, { Component, useRef, useEffect } from 'react';
import './workSections.scss';
import Date from './CurrentDate';

import LiItem from './Li-Item';
function WorkSection() {
    let [todos, setTodos] = React.useState([]);
    let [todoInProgress, setTodoInProgress] = React.useState([]);
    let [inputBlock, setInputBlock] = React.useState('inputOpacity');
    let [value, setValue] = React.useState('');
    let [noBtnAddTodo, setNoBtnAddTodo] = React.useState("addTodo");

    const inputRef = useRef(null);

    let date = new Date();

    useEffect(() => {
        if (inputBlock === 'input') {
          inputRef.current.focus();
        }
      }, [inputBlock]);

    function setOpacity() {
        setInputBlock('input');
        setNoBtnAddTodo('none');
    }

    function setV (event) {
        setValue(event.target.value);
    }

    function handleAddTodo() {
        if(value != "" && !todos.includes(value.toLocaleLowerCase())) {
            let valueLowerCase = value.toLowerCase();
            setTodos([...todos, valueLowerCase]);
            setInputBlock('none');
            setNoBtnAddTodo('addTodo');
            setValue('');
            console.log(date)
        }
    }

    function addToProgress(item) {
        console.log(todoInProgress)
        let itemLowerCase = item.toLowerCase();
        if(!todoInProgress.includes(itemLowerCase)) {
            
            setTodoInProgress([...todoInProgress, itemLowerCase])
            setTodos(prevTodos => prevTodos.filter(todo => todo !== item));
        }
        else {
            console.log('Такое задание уже выполняется')
        }
    }

    function deleteTodo(item) {
        setTodos(prevTodos => prevTodos.filter(todo => todo !== item));
    }

    const handleKeyPress = (event) => {
        const keyCode = event.keyCode || event.which;
        if (keyCode === 13) {
          handleAddTodo();
        }
      };

    return ( 
        <>
            <div className='workSection'>

                    <div className="lesson_board">
                        <h2>Lesson Board <span className='todo_length'>{todos.length}</span></h2>
                        <button onClick={setOpacity} className={noBtnAddTodo}><span>+</span> Create new</button>
                        <div className={inputBlock}>
                                <input ref={inputRef} type="text" value={value} onChange={setV} placeholder='drink tea....' onKeyPress={handleKeyPress}/>
                                <button onClick={handleAddTodo}>add</button>
                        </div>
                        <div className="todos">
                            <ul>
                                {todos.map((item, index) => (
                                        <LiItem  key={item} item={item}>
                                            <button className='in_process' onClick={() => addToProgress(item)}>In Process</button>
                                            <button className='delete' onClick={() => deleteTodo(item)}>delete</button>
                                        </LiItem>
                                ))}
                            </ul>
                        </div>
                    </div>
                    <div className="in_process">
                        <h2>In Process <span className='todo_length'>{todoInProgress.length}</span></h2>
                        <div className="todos">
                                <ul>
                                    {todoInProgress.map((item, index) => (
                                        <LiItem key={index} item={item}/>
                                    ))}
                                </ul>
                        </div>
                    </div>
                    <div className="finish">
                        <h2>Finish</h2>
                        <div className="todos">
                            
                        </div>
                    </div>
            </div>
        </>
     );
}

export default WorkSection;
//setTodoInProgress={setTodoInProgress(item)}
//setTodoInProgress={setTodoInProgress(item)}