import React, { Component } from 'react';
import './workSections.scss';
function WorkSection() {
    let [todos, setTodos] = React.useState([]);
    let [inputBlock, setInputBlock] = React.useState('inputOpacity');
    let [value, setValue] = React.useState('');
    let [noBtnAddTodo, setNoBtnAddTodo] = React.useState("addTodo");


    function setOpacity() {
        setInputBlock('input');
        // console.log(inputBlock);
        setNoBtnAddTodo('none');
    }

    function setV (event) {
        setValue(event.target.value);
        // console.log(event.target.value);
    }

    function handleAddTodo() {
        if(value != "") {
            setTodos([...todos, value]);
            setInputBlock('none');
            setNoBtnAddTodo('addTodo');
            // console.log(todos);
            // console.log(value);
            setValue('')
        }
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
                                <input type="text" value={value} onChange={setV} placeholder='drink tea....' onKeyPress={handleKeyPress}/>
                                <button onClick={handleAddTodo}>add</button>
                        </div>
                        <div className="todos">
                            <ul>
                                {todos.map((item, index) => (
                            

                                        <li className='todo' key={index}>
                                            <h3 className='todo-info'>{item}</h3>
                                            <div className="btn-bck">
                                                <button className='delete'>finish</button>
                                                <button className='in_process'>In Process</button>
                                            </div>
                                        </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                    <div className="in_procces">
                        <h2>In Process</h2>
                        <div className="todos">
                            
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
