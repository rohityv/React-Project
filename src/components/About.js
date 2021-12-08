import React, { Fragment } from 'react'
import img from "./images/img.jpg"
import htmlImg from "./images/html.jpg"
import jsImg from "./images/javascript.jpg"
import reactImg from "./images/react.jpg"
import cssImg from "./images/css.jpg"
import bootstrapImg from "./images/bootstrap.jpg"

export default function About() {

    const style = {
      title: {
        height: "50px",
        overflow: "hidden",
      },

      titleItemWrapper: {
        height: "100%",
        animation: "move 10s ease-in-out infinite alternate",
      },

      titleItem: {
        height: "50px",
        fontSize: "30px",
        fontWeight: "bold",
        color: "#fff",
        display: "flex",
        alignItems: "center",
      },
    };

    return (
        <Fragment>
            <section className="section-padding bg-dblue text-white">
                <div className="container">
                    <div className="row justify-content-center align-items-center border-left border-white-left">
                        <div className="col-lg-4">
                            <div className="img">
                                <img src={img} alt="..." className="img-fluid rounded-circle abt-img" />
                            </div>
                        </div>
                        <div className="col-lg-4">
                            <p className="section-text">Hi, my name is Rohit. I am a Fresher and self taught coder, Actively looking for a job in Front-End Development.
                            </p>
                            <p className="section-text">I have deep knowledge of javascript dom API and Javascript async like Js Promises and Js Async/Await.
                            </p>
                            <p className="section-text">I'm also familiar with javascript libraries like jQuery and React.js.</p>
                            <p className="section-text"></p>
                            <div className="i-title" style = {style.title} >
                                <div className="i-title-wrapper" style = {style.titleItemWrapper} >
                                    <div className="i-title-item" style = {style.titleItem} >Web Developer</div>
                                    <div className="i-title-item" style = {style.titleItem} >UI/UX Designer</div>
                                    <div className="i-title-item" style = {style.titleItem} >Photographer</div>
                                    <div className="i-title-item" style = {style.titleItem} >Content Creater</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="section-padding">
                <div className="container">
                    <div className="row border-left">
                        <div className="col-12">
                            <h2 className="text-center mb-lg-5 mb-4 heading-1">Skills</h2>
                        </div>
                        <div className="col-lg-3 col-sm-6">
                            <div className="img">
                                <img className="img-fluid img-border" src={htmlImg} alt="html" />
                            </div>
                        </div>
                        <div className="col-lg-3 col-sm-6">
                            <div className="img">
                                <img className="img-fluid img-border" src={jsImg} alt="javascript" />
                            </div>
                        </div>
                        <div className="col-lg-3 col-sm-6">
                            <div className="img">
                                <img className="img-fluid img-border" src={reactImg} alt="react" />
                            </div>
                        </div>
                        <div className="col-lg-3 col-sm-6">
                            <div className="img">
                                <img className="img-fluid img-border" src={cssImg} alt="css" />
                            </div>
                        </div>
                        <div className="col-lg-3 col-sm-6">
                            <div className="img">
                                <img className="img-fluid img-border" src={bootstrapImg} alt="bootstrap" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="section-padding-bottom">
                <div className="container">
                    <div className="row border-left g-4">
                        <div className="col-12">
                            <h2 className="text-center mb-lg-5 mb-4 heading-1">More Sites And Tasks</h2>
                        </div>
                        <div className="col-lg-4 col-sm-6">
                            <div className="all-sites"><iframe title="web1" src= "https://smartpartspc.com/" height="350" width="100%" scrolling="yes"></iframe></div>
                        </div>
                        <div className="col-lg-4 col-sm-6">
                            <div className="all-sites"><iframe title="web2" src= "https://vitalitywellnessclinic.com/" height="350" width="100%" scrolling="yes"></iframe></div>
                        </div>
                        <div className="col-lg-4 col-sm-6">
                            <div className="all-sites"><iframe title="web3" src= "https://rohityv.github.io/chatbot/"height="350" width="100%" scrolling="yes"></iframe></div>
                        </div>
                        <div className="col-lg-4 col-sm-6">
                            <div className="all-sites"><iframe title="web4" src= "https://rohityv.github.io/reactjs-project/"height="350" width="100%" scrolling="yes"></iframe></div>
                        </div>
                        <div className="col-lg-4 col-sm-6">
                            <div className="all-sites"><iframe title="web5" src= "https://rohityv.github.io/weq-task/" height="350" width="100%" scrolling="yes"></iframe></div>
                        </div>
                    </div>
                </div>
            </section>
        </Fragment>
    )
}
