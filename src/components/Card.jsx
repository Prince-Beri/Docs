import React, { useState } from 'react'
// import { FaRegFileAlt } from "react-icons/fa";
// import { LuDownload } from "react-icons/lu";
import { IoCloseCircleOutline } from "react-icons/io5";
import { CiMinimize1 } from "react-icons/ci";
import { CiMaximize1 } from "react-icons/ci";
import { motion } from "framer-motion"

const Card = ({  card, index, reference, todoDeletedIdx, setTodoDeletedIdx }) => {
  
  // todo card handling.
  const [isMinimize, setIsMinimize] = useState(false);

  return (
    <motion.div drag dragConstraints={reference} whileDrag={{scale: 1.2, }} className=' relative flex flex-col  rounded-[35px]  bg-zinc-900/90 text-white overflow-hidden h-[28rem]'>
        <div className='overflow-hidden w-[23rem] mx-2 my-1'>
            <div className='card-title flex px-1 h-8 justify-between items-center bg-zinc-900'>
                <div className='px-1 mx-1 w-full border-2 rounded-md'>{card.title}</div>
                <div className='flex gap-2 h-full justify-evenly items-center px-2 w-1/4' >
                    {
                        !isMinimize ? 
                         <div className='cursor-pointer border-2 rounded-md' title='Minmize'><CiMinimize1 size='1.2rem' onClick={() => setIsMinimize(!isMinimize)}/></div>
                        :
                        <div className='cursor-pointer border-2 rounded-md'title='Maxmize'><CiMaximize1 size='1.2rem' onClick={() => setIsMinimize(!isMinimize)}/></div>
                    }
                   
                    <div className='cursor-pointer border-2 rounded-md'title='Delete'><IoCloseCircleOutline size='1.2rem'/></div>
                </div>
            </div>
            
        </div>
        <ul className='w-full my-2 p-2'>
                {
                    card.todoTasks.map((task, idx) => (
                        <li 
                            key={idx} 
                            className='bg-zinc-700 mx-1 overflow-hidden my-2 flex items-center  p-2 rounded-md h-[3.2rem] w-[22rem] '
                        >
                            <input type='checkbox' name='task' className='mx-2 h-4 w-4'/>  
                            <div className='flex justify-center  w-full items-center'>
                                <div className={`${task.length > 15 ? 'w-full h-10 flex overflow-y-auto items-center p-1' : 'w-full h-10 flex items-center p-1'}`}>
                                    {task}
                                </div>
                            </div>
                        </li>
                    ))
                
                }
        </ul>
    </motion.div>
  )
}

export default Card;