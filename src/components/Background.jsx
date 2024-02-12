import React from 'react'
const Background = () => {
  return (
    <>
      <section className='fixed z-[2] w-full h-screen'>
        <nav className='absolute top-[5%] w-full py-4 flex justify-center text-zinc-500 text-xl'>Documents</nav>
        <h1 className='absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%] text-[13vw] leading-none tracking-tight text-zinc-500 font-semibold'>Docs.</h1>
      </section>
    </>
  )
}

export default Background