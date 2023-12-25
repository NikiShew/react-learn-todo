import React, { Component, useRef, useEffect } from 'react';
import './workSections.scss';
import CurrentDate from './CurrentDate';

import LiItem from './Li-Item';
function WorkSection() {
    let [todos, setTodos] = React.useState([]);
    let [todoInProgress, setTodoInProgress] = React.useState([]);
    let [finishTodo, setFinishTodo] = React.useState([]);

    let [inputBlock, setInputBlock] = React.useState('inputOpacity');
    let [value, setValue] = React.useState('');
    let [noBtnAddTodo, setNoBtnAddTodo] = React.useState("addTodo");

    const inputRef = useRef(null);


    useEffect(() => {
        if (inputBlock === 'input') {
            inputRef.current.focus();
        }
    }, [inputBlock]);


    useEffect(() => {
        // Загружаем данные из локального хранилища при загрузке компонента
        const storedTodos = localStorage.getItem('todos');
        const storedTodoInProgress = localStorage.getItem('todoInProgress');
        const storedFinishTodo = localStorage.getItem('finishTodo');

        if (storedTodos) {
            setTodos(JSON.parse(storedTodos));
        }

        if (storedTodoInProgress) {
            setTodoInProgress(JSON.parse(storedTodoInProgress));
        }

        if (storedFinishTodo) {
            setFinishTodo(JSON.parse(storedFinishTodo));
        }
    }, []);

    useEffect(() => {
        localStorage.setItem('todoInProgress', JSON.stringify(todoInProgress));
    }, [todoInProgress]);

    useEffect(() => {

        localStorage.setItem('finishTodo', JSON.stringify(finishTodo));
    }, [finishTodo]);


    function setOpacity() {
        setInputBlock('input');
        setNoBtnAddTodo('none');
    }

    function setV(event) {
        setValue(event.target.value);
    }

    function handleAddTodo() {
        // if (value != "" && !todos.includes(value.toLocaleLowerCase())) {
        //     let valueLowerCase = value.toLowerCase();
        //     setTodos([...todos, valueLowerCase]);
        //     setInputBlock('none');
        //     setNoBtnAddTodo('addTodo');
        //     setValue('');
        //     localStorage.setItem('todos', JSON.stringify(newTodos));
        // }
        if (value !== "" && !todos.includes(value.toLowerCase())) {
            const valueLowerCase = value.toLowerCase();
            const newTodos = [...todos, valueLowerCase];
            setTodos(newTodos);
            setInputBlock('none');
            setNoBtnAddTodo('addTodo');
            setValue('');
            localStorage.setItem('todos', JSON.stringify(newTodos));
        }
    }

    // function addToProgress(item) {
    //     console.log(todoInProgress)
    //     let itemLowerCase = item.toLowerCase();
    //     if (!todoInProgress.includes(itemLowerCase)) {

    //         setTodoInProgress([...todoInProgress, itemLowerCase])
    //         setTodos(prevTodos => prevTodos.filter(todo => todo !== item));
    //         setFinishTodo(prevTodos => prevTodos.filter(todo => todo !== item));
    //     }
    //     else {
    //         console.log('Такое задание уже выполняется')
    //     }
    // }
    const addToProgress = (item) => {
        const itemLowerCase = item.toLowerCase();
        if (!todoInProgress.includes(itemLowerCase)) {
            const newInProgress = [...todoInProgress, itemLowerCase];
            setTodoInProgress(newInProgress);
            setTodos(prevTodos => prevTodos.filter(todo => todo !== itemLowerCase));
            setFinishTodo(prevTodos => prevTodos.filter(todo => todo !== itemLowerCase));
            localStorage.setItem('todoInProgress', JSON.stringify(newInProgress));
            localStorage.setItem('todos', JSON.stringify(todos.filter(todo => todo !== itemLowerCase)));
            localStorage.setItem('finishTodo', JSON.stringify(finishTodo.filter(todo => todo !== itemLowerCase)));
        } else {
            console.log('Такое задание уже выполняется');
        }
    };

    // function todoInFinish(item) {
    //     if (!finishTodo.includes(item)) {
    //         console.log(todoInProgress)
    //         let itemLowerCase = item.toLowerCase();
    //         setTodos(prevTodos => prevTodos.filter(todo => todo !== item));
    //         setFinishTodo([...finishTodo, itemLowerCase])
    //         setTodoInProgress(prevTodos => prevTodos.filter(todo => todo !== item));
    //     }

    // }

    const todoInFinish = (item) => {
        if (!finishTodo.includes(item)) {
            const newFinishTodo = [...finishTodo, item];
            setTodos(prevTodos => prevTodos.filter(todo => todo !== item));
            setFinishTodo(newFinishTodo);
            setTodoInProgress(prevTodos => prevTodos.filter(todo => todo !== item));
            localStorage.setItem('todos', JSON.stringify(todos.filter(todo => todo !== item)));
            localStorage.setItem('finishTodo', JSON.stringify(newFinishTodo));
            localStorage.setItem('todoInProgress', JSON.stringify(todoInProgress.filter(todo => todo !== item)));
        }
    };


    // function deleteTodo(item) {
    //     setTodos(prevTodos => prevTodos.filter(todo => todo !== item));
    //     setFinishTodo(prevTodos => prevTodos.filter(todo => todo !== item));
    // }

    const deleteTodo = (item) => {
        setTodos(prevTodos => prevTodos.filter(todo => todo !== item));
        setFinishTodo(prevTodos => prevTodos.filter(todo => todo !== item));
        localStorage.setItem('todos', JSON.stringify(todos.filter(todo => todo !== item)));
        localStorage.setItem('finishTodo', JSON.stringify(finishTodo.filter(todo => todo !== item)));
    };

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
                    {/* <button onClick={setOpacity} className={noBtnAddTodo}><span>+</span> Create new</button>
                    <div className={inputBlock}>
                        <input ref={inputRef} type="text" value={value} onChange={setV} placeholder='drink tea....' onKeyPress={handleKeyPress} />
                        <button onClick={handleAddTodo}>add</button>
                    </div> */}
                    <div className="todos">
                        <ul>
                            {todos.map((item, index) => (
                                <LiItem key={item} item={item}>
                                    <button className='finish' onClick={() => todoInFinish(item)}>finish</button>
                                    <button className='in_process' onClick={() => addToProgress(item)}>In Process</button>
                                    <button className='delete' onClick={() => deleteTodo(item)}>delete</button>
                                </LiItem>
                            ))}
                        </ul>
                    </div>
                    <button onClick={setOpacity} className={noBtnAddTodo}><span>+</span> Create new</button>
                    <div className={inputBlock}>
                        <input ref={inputRef} type="text" value={value} onChange={setV} placeholder='drink tea....' onKeyPress={handleKeyPress} />
                        <button onClick={handleAddTodo}>add</button>
                    </div>
                </div>
                <div className="in_process">
                    <h2>In Process <span className='todo_length'>{todoInProgress.length}</span></h2>
                    <div className="todos">
                        <ul>
                            {todoInProgress.map((item, index) => (
                                <LiItem key={index} item={item}>
                                    <button className='finish' onClick={() => todoInFinish(item)}>finish</button>
                                    <button className='in_process' onClick={() => addToProgress(item)}>In Process</button>

                                </LiItem>
                            ))}
                        </ul>
                    </div>
                </div>
                <div className="finish">
                    <h2>Finish <span className='todo_length'>{finishTodo.length}</span></h2>
                    <div className="todos">
                        <ul>
                            {finishTodo.map((item, index) => (
                                <LiItem key={index} item={item}>
                                    <button className='in_process' onClick={() => addToProgress(item)}>In Process</button>
                                    <button className='delete' onClick={() => deleteTodo(item)}>delete</button>

                                </LiItem>
                            ))}

                        </ul>
                    </div>
                </div>
            </div>
        </>
    );
}


export default WorkSection;
//setTodoInProgress={setTodoInProgress(item)}
//setTodoInProgress={setTodoInProgress(item)}