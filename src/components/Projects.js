
import "./Projects.scss"
import { BrowserRouter as Router } from "react-router-dom";



export default function Projects() {


  return (
    <>
      <Router>
        <div className="projects" id="portfolio">
          Recent Projects
        </div>
        <div className="sections">
          <a className="portfolio" href="https://github.com/mathewsteenwinkel/petal-profits" target="blank">
            <div className="sectionOne">
              <div className="Ttl"> Petal Profits</div>
              <p className="projectTtl">Light House Labs Final Project</p>
              <p className="ProjectBD">
                A PERN stack app that allowed users to visually represent their spending and savings each month.
                Savings from each month would be used then to water plant goals. 🌱       </p>
            </div>
          </a>

          <a className="portfolio" href="https://github.com/mathewsteenwinkel/Scheduler" target="blank">
            <div className="sectionOne">

              <div className="Ttl"> Scheduler</div>
              <p className="projectTtl">Light House Labs React Project</p>
              <p className="ProjectBD">
                A Scheduling app made in react to allow users to book and cancel appointment with mentors as needed.
                With the use of React, Storybook, Cypress, Axios and Jest we created a SPA (single-page application) in which users can select a time and meet with a interviewer.
              </p>
            </div>
          </a>

          <a className="portfolio" href="https://github.com/mathewsteenwinkel/Buy-Sell-Listing-Website" target="blank">
            <div className="sectionOne">
              <div className="Ttl">  E-commerce store </div>
              <p className="projectTtl">Light House Labs Midterm Project</p>
              <p className="ProjectBD">
                A small E-commerce website that allowed users to create, delete and edit products on the site.
                sign in capabilities and user authentication was also included.
              </p>
            </div>
          </a>



        </div>
      </Router>
    </>
  )
}