import React, { Fragment } from 'react'
import { useLocation } from 'react-router-dom'
import Button from './Button'

export default function ToDoList( {title, clickOnAddBtn, openClose} ) {

    const location = useLocation()

    return (
        <Fragment>
            <div className="todo-header mb-5 d-flex justify-content-between align-items-center border-bottom border-dark pb-4">
                <h2 className="heading-1">{title}</h2>
                {/* {location.pathname === '/react-project' && <Button onclick={clickOnAddBtn} name={openClose} />} */}
                {<Button onclick={clickOnAddBtn} name={openClose} />}
            </div>
        </Fragment>
    )
}
