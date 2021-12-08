import React, { Fragment } from 'react'

export default function Task({task, onDelete}) {
    return (
        <Fragment>
            <h4 className="d-inline-block task-bg text-white p-2">{task.text} <i class="bi bi-x" onClick = { () => onDelete(task.id)}></i></h4><br/>
        </Fragment>
    )
}
