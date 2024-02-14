import React from 'react'
// import { FaRegFileAlt } from "react-icons/fa";
// import { LuDownload } from "react-icons/lu";
// import { IoCloseCircleOutline } from "react-icons/io5";
import { motion } from "framer-motion"

const Card = ({ card, reference }) => {
  return (
    <motion.div drag dragConstraints={reference} whileDrag={{scale: 1.2, }} className=' relative flex w-[20rem] h-[24rem] rounded-[45px] px-1 py-2 bg-zinc-900/90 text-white overflow-hidden'>
        <ul>
            {
                card.todoTasks.map((task, idx) => (
                    <li 
                     key={idx} 
                     className='bg-sky-900 w-full m-1'
                     >
                        {task}
                    </li>
                ))
               
            }
        </ul>
        
    </motion.div>
  )
}

export default Card