import React, { useRef, useState } from 'react';
import { CiSquarePlus } from "react-icons/ci";
import { IoCloseCircleOutline } from "react-icons/io5";
import Card from './Card';
import CreateTasks from './CreateTasks';

const Forground = () => {

  const [showCreateTodo, setShowCreateTodo] = useState(false);

  // child comonenet states.

  const [task, setTask] = useState('');
  const [tasks, setTasks] = useState([]);
  const [editedIndex, setEditedIndex] = useState(null); // Track the index of the task being edited
  const [addAllTasksIntoTodo, setAddAllTasksIntoTodo] = useState([{todoTasks: []}]);

  const ref = useRef(null);

  const handleUpdatedTasks = (updatedStoredtasks, idx) => {
    const updatedStoredTasksObj = [...addAllTasksIntoTodo];
    updatedStoredTasksObj[idx].todoTasks = updatedStoredtasks;
    setAddAllTasksIntoTodo(updatedStoredTasksObj);
  }
  

  return (
    <section ref={ref} className='fixed select-none top-0 left-0 w-full h-screen sm:h-[100%] z-[3] flex flex-wrap gap-5 p-10'>
        {
            showCreateTodo ? 
            <CreateTasks 
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
            addAllTasksIntoTodo.map((card, idx) => (
                <Card 
                    card={ card } 
                    key={idx} 
                    reference={ref}
                    
                />
            ))   
        }
        {
            <div className='absolute cursor-pointer w-10 h-10 bg-zinc-900 rounded-xl flex justify-center items-center right-4 top-2'>
                <div className='text-white'
                    onClick={() => setShowCreateTodo(!showCreateTodo)}
                >
                    {showCreateTodo ? <IoCloseCircleOutline size={'1.7rem'} /> : <CiSquarePlus size={'1.8rem'}/>}
                </div>
            </div>
        }
        
    </section>
  )
}

export default Forground