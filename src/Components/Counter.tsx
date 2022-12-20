import React from 'react'

import './Counter.css'

interface Props {
  time: number
  period: string
}
export default function Counter({ period, time }: Props) {

  return (
    <div className='counter'>
      <div className='number'>
        {('0' + time).slice(-2)}
      </div>
      <p className='time'>{period}</p>
    </div>
  )
}