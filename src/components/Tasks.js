import React from 'react'
import Task from './Task'

export default function Tasks({tasks, onDelete}) {

    return (
        <div className = "add-task-result"> 
            {tasks.map((task) => {
               return <Task key = {task.id} task = {task} onDelete = {onDelete} />
            })}
        </div> 
    )
}
