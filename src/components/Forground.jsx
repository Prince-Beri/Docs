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
  
  // parent comonent states

    const storeTaskIntoTodo = () => {

    };

  const ref = useRef(null);
  const data = [
    {
        desc: 'This is discreption of note1....',
        filesize: '.9mb',
        closeBtn: false,
        tag: {
            isOpen: true,
            tagTitle: 'Download Now',
            tagColor: 'bg-green-600'
        }

    },{
        desc: 'This is discreption of note2....',
        filesize: '2.3mb',
        closeBtn: true,
        tag: {
            isOpen: true,
            tagTitle: 'Read Me',
            tagColor: 'bg-sky-600'
        }

    },{
        desc: 'This is discreption of note3....',
        filesize: '1.9mb',
        closeBtn: false,
        tag: {
            isOpen: true,
            tagTitle: 'Download Now...',
            tagColor: 'bg-amber-600'
        }

    },{
        desc: 'This is discreption of note4....',
        filesize: '2.7mb',
        closeBtn: true,
        tag: {
            isOpen: true,
            tagTitle: 'Reminder',
            tagColor: 'bg-blue-600'
        }

    },
    {
        desc: 'This is discreption of note4....',
        filesize: '2.7mb',
        closeBtn: true,
        tag: {
            isOpen: false,
            tagTitle: 'Reminder',
            tagColor: ''
        }

    }
    
  ]

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
            /> :
            data.map((item, idx) => (
                <Card data={ item } key={idx} reference={ref}/>
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