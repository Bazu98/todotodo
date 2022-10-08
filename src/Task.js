import React from 'react'

export const Task = ({taskName,time}) => {
  return (
    <div>
        <h1>TaskName: {taskName}</h1>
        <h1>Time To Completed: {time}</h1>
    </div>
  )
}
