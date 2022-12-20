import React, { useEffect, useState } from 'react'

import { Counter } from './'

const SECONDS_IN_DAY = 86400
const SECONDS_IN_HOUR = 3600
const SECONDS_IN_MINUTE = 60

export default function Main() {
  const timeArray = [8, 23, 2, 44]

  let [days, hours, minutes, seconds] = timeArray

  const totalTimeInSeconds = days * SECONDS_IN_DAY + hours * SECONDS_IN_HOUR + minutes * SECONDS_IN_MINUTE + seconds

  const [time, setTime] = useState(totalTimeInSeconds)

  const totalDays = Math.floor(time / 60 / 60 / 24)
  const totalHours = Math.floor(time / 60 / 60) % 24
  const totalMinutes = Math.floor(time / 60) % 60
  const totalSeconds = Math.floor(time) % 60

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(prev => {
        return prev === 0 ? 0 : prev - 1
      })
    }, 1000)

    return () => clearInterval(interval)
  }, [time])

  return (
    <main>
      <h1>We’re launching soon</h1>
      <div>
        <div className='counters'>
          <Counter time={totalDays} period='days' />
          <Counter time={totalHours} period='hours' />
          <Counter time={totalMinutes} period='minutes' />
          <Counter time={totalSeconds} period='seconds' />
        </div>
      </div>
    </main>
  )
}
