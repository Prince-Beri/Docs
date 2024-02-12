import React from 'react'
import { FaRegFileAlt } from "react-icons/fa";
import { LuDownload } from "react-icons/lu";
import { IoCloseCircleOutline } from "react-icons/io5";
import { motion } from "framer-motion"

const Card = ({ data, reference }) => {
  return (
    <motion.div drag dragConstraints={reference} whileDrag={{scale: 1.2, }} className=' relative flex w-60 h-72 rounded-[45px] px-5 py-10 bg-zinc-900/90 text-white overflow-hidden'>
        <FaRegFileAlt />
         <p className='text-sm font-semibold mt-5 leading-tight'>{ data.desc }</p>
         <footer className='footer absolute w-full bottom-0 left-0 '>
            <div className='flex items-center justify-between py-3 px-8 mb-1'>
                <h4>{ data.filesize }</h4>
                <span className='bg-zinc-700 w-7 h-7 flex rounded-full justify-center items-center cursor-pointer'>
                    {
                        data.closeBtn ? <IoCloseCircleOutline size='1em' color='#fff'/> : <LuDownload size='.9em' color='#fff'/> 
                    }
                </span>
            </div>
            {
                data.tag.isOpen && <div className={`tag w-full py-4 ${data.tag.tagColor}`}>
                <h4 className='flex justify-center items-center font-semibold text-sm'>{ data.tag.tagTitle }</h4>
            </div>
            }
         </footer>
    </motion.div>
  )
}

export default Card