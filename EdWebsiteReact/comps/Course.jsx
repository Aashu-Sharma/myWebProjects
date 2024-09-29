import React from 'react'
import library from '../Images/library.png'
import basketball from '../Images/basketball.png'
import cafeteria from '../Images/cafeteria.png'

function Course() {
    return (
        <>
          <section className="sub-header">
            <h1>Our Courses</h1>
          </section>  


            <section className="courses">

                <div className="title-text">
                    <h1>Courses We Offer</h1>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
                </div>

                <div className="row">

                    <div className="course-col">
                        <h3>Intermediate</h3>
                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ea beatae excepturi mollitia recusandae sapiente. Incidunt dolore earum animi. Earum, consequatur.</p>
                    </div>

                    <div className="course-col">
                        <h3>Under Graduation</h3>
                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ea beatae excepturi mollitia recusandae sapiente. Incidunt dolore earum animi. Earum, consequatur.</p>
                    </div>

                    <div className="course-col">
                        <h3>Post Graduation</h3>
                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ea beatae excepturi mollitia recusandae sapiente. Incidunt dolore earum animi. Earum, consequatur.</p>
                    </div>

                </div>
            </section>

            <hr />

            <section className="facilities">

                <div className="title-text">
                    <h1>Other Facilities</h1>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
                </div>

                <div className="row">

                    <div className="facilities-col">
                        <img src={library} />
                        <h3>World Class Library</h3>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas, at?</p>
                    </div>

                    <div className="facilities-col">
                        <img src={basketball} />
                        <h3>Large Playground</h3>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas, at?</p>
                    </div>

                    <div className="facilities-col">
                        <img src={cafeteria} />
                        <h3>Healthy and Tasty Food</h3>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas, at?</p>
                    </div>

                </div>
            </section>
        </>
    )
}

export default Course
