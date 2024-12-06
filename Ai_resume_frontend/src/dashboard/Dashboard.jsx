import React from 'react'
import AddResume from './AddResume'

const Dashboard = () => {
  return (
    <div className="p-10 md:px-28 lg:px-32">
      <h2 className='font-bold text-3xl'>Resume</h2>
      <p>Start Createing AI resume to your next Job role</p>
      <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 mt-10 h-[280px]
      hover:scale-105 transition-all '>
        <AddResume/>
      </div>
    </div>
  )
}

export default Dashboard
