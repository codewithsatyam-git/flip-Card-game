import React from 'react'

const GameOver = ({score, setScore}) => {
  return (
    <div className='w-auto text-white'>
      <h1 className='text-xl font-bold'>GameOver</h1>
      <p>score :{score} </p>
    </div>
  )
}

export default GameOver
