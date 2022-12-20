import React from 'react'

import './Counter.css'

interface Props {
  time: number
  period: string
}
export default function Counter({ period, time }: Props) {

  return (
    <div className='counter'>
      <div className='time'>
        {('0' + time).slice(-2)}
        <div className='matrix-container'>
          <div className='matrix' />
          <hr />
        </div>
      </div>
      <p className='period'>{period}</p>
    </div>
  )
}