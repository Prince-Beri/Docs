import React from 'react'
// import { FaRegFileAlt } from "react-icons/fa";
// import { LuDownload } from "react-icons/lu";
// import { IoCloseCircleOutline } from "react-icons/io5";
import { motion } from "framer-motion"

const Card = ({  card, reference}) => {
  return (
    <motion.div drag dragConstraints={reference} whileDrag={{scale: 1.2, }} className=' relative flex w-[24rem] h-[28rem] rounded-[35px] px-1 py-2 bg-zinc-900/90 text-white overflow-hidden'>
        <div className='w-full overflow-hidden'>
            <div className='card-title flex justify-center items-center'>
                {card.title}
            </div>
            <ul className='w-full my-2 p-2'>
                {
                    card.todoTasks.map((task, idx) => (
                        <li 
                            key={idx} 
                            className='bg-sky-900 mx-1 w-full overflow-hidden my-2 flex items-center  p-2 rounded-md h-[3.2rem]'
                        >
                            <input type='checkbox' name='task' className='mx-2 h-4 w-4'/>  
                            <div className='flex justify-center  w-full items-center'>
                                <div className='w-full h-10 overflow-y-scroll flex items-center p-1'>
                                    {task}
                                </div>
                            </div>
                        </li>
                    ))
                
                }
            </ul>
        </div>
    </motion.div>
  )
}

export default Card