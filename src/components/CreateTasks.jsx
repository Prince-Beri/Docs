import React, { useState } from 'react';
import { IoCloseCircleOutline } from "react-icons/io5";
import { FaRegCheckCircle } from "react-icons/fa";
import { FaRegEdit } from "react-icons/fa";


const CreateTask = ({
  todoTitle,
  setTodoTitle,
  task,
  setTask,
  tasks,
  setTasks,
  editedIndex,
  setEditedIndex,
  addAllTasksIntoTodo,
  setAddAllTasksIntoTodo,
  showCreateTodo,
  setShowCreateTodo
}) => {


  const handleDeleteTask = (index) => {
    const updatedTasks = tasks.filter((_, idx) => idx !== index);
    setTasks(updatedTasks);
  };

  const handleEditTask = (index) => {
    setTask(tasks[index]); // Populate input field with task value
    setEditedIndex(index); // Set the index of the task being edited
  };

  const handleTaskInputChange = (e) =>{
    setTask(e.target.value);
  };
  const handleTodoTitleChange = (e) => {
    setTodoTitle(e.target.value);
  }

  const addTaskIntoTodo = (e) => {
    e.preventDefault();
    if (editedIndex !== null) {
      const updatedTasks = [...tasks];
      updatedTasks[editedIndex] = task; // Update the task at the edited index
      setTasks(updatedTasks);
      setTask('');
      setEditedIndex(null); // Reset editedIndex after editing is done
    } else {
      setTasks([...tasks, task]);
      setTask('');
    }
  };

  const handleCreateTodo = (index) => {
    
    const updatedObject = [...addAllTasksIntoTodo];
    updatedObject[index] = {...updatedObject[index], title: todoTitle, todoTasks: tasks};
    setAddAllTasksIntoTodo(updatedObject);
    console.log(updatedObject);
    let localStorageObject = JSON.stringify(addAllTasksIntoTodo);
    localStorage.setItem('todoObject', localStorageObject);
    let memoryObject = JSON.parse(localStorage.getItem('todoObject'));
    console.log(memoryObject);
    setTasks([]);
    setTodoTitle('');
    setShowCreateTodo(!showCreateTodo);
    
  };



    return (
      <section className='relative flex text-white w-full h-screen '>
        <div className='flex flex-col m-w-[50%] m-auto bg-zinc-900/90 md:w-1/3 md:h-3/4 w-[calc(100vw-40px)] h-[80vh] rounded-3xl'>
          <form onSubmit={addTaskIntoTodo} className='w-full flex flex-col h-full gap-5'>
            <h1 className='font-semibold mx-auto my-2'>Generate your Todo Tasks</h1> 
            <div className='flex w-full '>
              <input 
                className='text-black mx-2 rounded-md h-8 w-full p-2'
                type='text'
                name='title'
                value={todoTitle}
                placeholder='Title of Todo...'
                onChange={handleTodoTitleChange}
              />
              <input
                className='text-black mx-2 rounded-md h-8 w-full p-2'
                type='text'
                name='task'
                placeholder='add tasks into TODO....'
                value={task}
                onChange={handleTaskInputChange}
               />
              <button 
                className='w-7 h-7 p-2 mx-1 rounded-lg bg-zinc-600 flex justify-center items-center' 
                type='submit'
                disabled={(task.length !== 0 ? false : true) || (tasks.length >= 5)}
              >
                <FaRegCheckCircle size={'2rem'}/>
              </button>
              
            </div>
            <p className='text-[10px] px-2 text-red-600 leading-none'>Note: You can add 1-5 Tasks pre Note for best Exeprence.</p>
            {
              tasks.map((task, idx) => (
                <div 
                  className='bg-zinc-900 mx-2 rounded-sm p-1 flex items-center' 
                  key={idx}
                >
                  <div className='flex justify-between w-full '>
                    <div className={`text-[13px] py-1 px-2 rounded-sm bg-zinc-600 h-10 w-80 lg:w-96 laeding-none ${task.length < 10 ? '' : 'overflow-y-scroll'}`}>{task}</div>
                    <div className='flex justify-between'>
                      <div
                        className='w-6 h-6 rounded-lg cursor-pointer bg-zinc-600 ml-1 mr-1 flex justify-center items-center'
                        onClick={() => handleDeleteTask(idx)}
                      >
                        <IoCloseCircleOutline size={'.9rem'} />
                      </div>
                      <div 
                        className='w-6 h-6 cursor-pointer rounded-lg bg-zinc-600 flex justify-center items-center' 
                        onClick={() => handleEditTask(idx)} // Trigger edit mode
                      >
                        <FaRegEdit size={'1rem'} />
                      </div>
                    </div>
                  </div>
                </div>
              ))
            }
           {tasks.length > 0 && <div className=' bg-zinc-600 mx-auto rounded-lg p-2 cursor-pointer'
            onClick={() => handleCreateTodo(addAllTasksIntoTodo.length)}
           >Create Todo</div>}
          </form>
        </div>
      </section>
    );
  };
  

export default CreateTask;