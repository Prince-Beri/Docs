import React, { useRef, useState, useEffect } from 'react';
import { CiSquarePlus } from "react-icons/ci";
import { IoCloseCircleOutline } from "react-icons/io5";
import Card from './Card';
import CreateTasks from './CreateTasks';

const Forground = () => {
  // handling what to show createTodo or Todo Lists.
  const [showCreateTodo, setShowCreateTodo] = useState(false);

  // child comonenet states.
  const [todoTitle, setTodoTitle] = useState('');
  const [task, setTask] = useState('');
  const [tasks, setTasks] = useState([]);
  const [editedIndex, setEditedIndex] = useState(null); // Track the index of the task being edited
  const [addAllTasksIntoTodo, setAddAllTasksIntoTodo] = useState([{title: 'title',todoTasks: ['this is your example task....']}]);

  // todo card handling.
  const [todoDeletedIdx, setTodoDeletedIdx] = useState(null);
  

  // reference to Card Component so we can't go outside from Forgound Component.
  const ref = useRef(null);

  // get Data from localStorage.
  useEffect(() => {
    const storedTodoObject = localStorage.getItem('todoObject');
    if(storedTodoObject){
        setAddAllTasksIntoTodo(JSON.parse(storedTodoObject));
    }

  },[])

  return (
    <section ref={ref} className='fixed top-0 left-0 w-full h-screen sm:h-[100%] z-[3] flex flex-wrap gap-5 p-10'>
        {
            showCreateTodo ? 
            <CreateTasks
                todoTitle={todoTitle}
                setTodoTitle={setTodoTitle}
                task={task}
                setTask={setTask}
                tasks={tasks}
                setTasks={setTasks}
                editedIndex={editedIndex}
                setEditedIndex={setEditedIndex}
                addAllTasksIntoTodo={addAllTasksIntoTodo}
                setAddAllTasksIntoTodo={setAddAllTasksIntoTodo}
                showCreateTodo={showCreateTodo}
                setShowCreateTodo={setShowCreateTodo}
                
            /> :
            // if tasks object length > 1 means we added tasks into tasks object. and we want to render the tasks from tasks object.
            addAllTasksIntoTodo.length > 1 ?
            
            addAllTasksIntoTodo.map((card, idx) => (
                // skipped the 0th idx because of empty object.
                idx !== 0 &&
                <Card 
                    card={ card } 
                    key={ idx } 
                    index={ idx }
                    reference={ ref }
                    todoDeletedIdx 
                    setTodoDeletedIdx
                />
            )) : <div className='mx-auto mt-20 text-zinc-300'>There is no tasks so add some tasks from '+' button</div> 
        }
        {
            /* 
                Add task and close Genrate button.
            */
            <div className='absolute cursor-pointer w-10 h-10 bg-zinc-900 rounded-xl flex justify-center items-center right-4 top-2'>
                <div className='text-white'
                    onClick={() => setShowCreateTodo(!showCreateTodo)}
                >
                    {showCreateTodo ? <IoCloseCircleOutline title='Close'size={'1.7rem'} /> : <CiSquarePlus  title='Create Todo' size={'1.8rem'}/>}
                </div>
            </div>
        }
        
    </section>
  )
}

export default Forground;