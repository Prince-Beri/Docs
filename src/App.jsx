import React from 'react'
import Background from './components/Background';
import Forground from './components/Forground';
const App = () => {
  return (
    <section className='relative w-full h-screen bg-zinc-800'>
      <Background />
      <Forground />
      
    </section>
  )
}

export default App;