import React, {useState} from 'react'

export default function AddTask({addTask}) {

    const [text, setText ] = useState('')

    const changeInp = function(e){
        setText(e.target.value)
    }

    const onSubmit = function(e){
        e.preventDefault()

        if(!text) {
            alert('Please add a task')
            return
        }
        addTask({text})

        setText('')
    }

    return (
      <div className="add-task mb-3">
        <form onSubmit={onSubmit}>
          <div className="row g-3">
            <div className="col-12">
              <input
                type="text"
                className="form-control"
                placeholder="Add Task"
                value={text}
                onChange={changeInp}
              />
            </div>
            <div className="col-12 text-end">
              <button className="btn btn-success" type="submit">Save Task</button>
            </div>
          </div>
        </form>
      </div>
    );
}
