import React, {Fragment, useState} from "react";
import './App.css'
import Header from "./components/Header";
import Footer from "./components/Footer";
import { BrowserRouter as Router, Link, Route } from "react-router-dom";
import About from "./components/About";
import Project from "./components/Project";
// todo list 
import ToDoList from "./components/ToDoList";
import Tasks from "./components/Tasks";
import AddTask from "./components/AddTask";
// student table 
import PhoneBookForm from "./components/PhoneBookForm";
import InformationTable from "./components/InformationTable";


export default function App(){

  // 1- to do list 

  const [showTask, setShowTask] = useState(false)
  const [task, setTask] = useState([ {text:'initial task 1', id:1}, {text:'initial task 2', id:2}])

  // hide and show task 
  const clickOnAddBtn = function(){
    setShowTask(() => !showTask)
  }

  // addTask

  let addTask = function(newtask){
    const id = Math.floor(Math.random() * 10000 + 1)
    const newTask = { id, ...newtask}
    setTask([...task, newTask])
  }

  // taskDelete

  let deleteTask = function(id){
    setTask(
      task.filter( (task) => task.id !== id)
    )
  }

  // 2- Student Table  

  const [addData, setAddData] = useState([
    {
      id: 0,
      count: 0,
      firstName: "e.g. Rohit",
      lastName: "e.g. Yadav",
      phoneNum: "e.g. 9769950552",
      
    },
  ]);

  function addEntryToPhoneBook(data) {
    const id = Math.floor(Math.random() * 1000 + 1);
    const newData = { id, ...data };
    console.log(newData);
    setAddData([...addData, newData]);
  }

  return (
    <Fragment>
      <Router>
        <Header title={"Devro"} />
        <Route
          path="/react-project"
          exact
          render={(props) => (
            <>
              {/* student Table  */}
              <section className="section-padding">
                <div className="container">
                  <div className="row border-left border-radium-left">
                    <div className="col">
                      <PhoneBookForm
                        studentTable="Info Table"
                        addEntryToPhoneBook={addEntryToPhoneBook}
                      />
                      <InformationTable tableData={addData} />
                    </div>
                  </div>
                </div>
              </section>
              {/* todo list  */}
              <section className="section-padding-bottom">
                <div className="container">
                  <div className="row border-left border-radium-left">
                    <div className="col-lg-6">
                      <div className="todo-list border border-2 p-4 border-dark">
                        <ToDoList
                          title={"ToDo List"}
                          clickOnAddBtn={clickOnAddBtn}
                          openClose={showTask}
                        />
                        {showTask && <AddTask addTask={addTask} />}
                        {task.length > 0 ? <Tasks tasks={task} onDelete={deleteTask} /> : "No task to show"}
                      </div>
                    </div>
                  </div>
                </div>
              </section>
            </>
          )}
        />
        <Route path="/about" component={About} />
        <Route path = "/project" component = {Project} />
        <Footer />
      </Router>
    </Fragment>
  );
}

