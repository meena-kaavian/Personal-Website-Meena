import React, { useState } from 'react';
import './App.css'
const App = () => {
  const [activeLink, setActiveLink] = useState('home');
  return (
    <div>
      <div className='personal-website-full-container'>
        <div className='header'>
          <a
            href="#home"
            className={activeLink === 'home' ? 'active-link' : ''}
            onClick={() => setActiveLink('home')}
          >
            Home
          </a>
          <a
            href="#skills"
            className={activeLink === 'skills' ? 'active-link' : ''}
            onClick={() => setActiveLink('skills')}
          >
            Skills
          </a>
          <a
            href="#experience"
            className={activeLink === 'experience' ? 'active-link' : ''}
            onClick={() => setActiveLink('experience')}
          >
            Experience
          </a>
          <a
            href="#projects"
            className={activeLink === 'projects' ? 'active-link' : ''}
            onClick={() => setActiveLink('projects')}
          >
            Projects
          </a>
          <a
            href="#contact"
            className={activeLink === 'contact' ? 'active-link' : ''}
            onClick={() => setActiveLink('contact')}
          >
            Contact
          </a>
        </div>
        <div className='content-container'>
          <div className='content'>
            <div className='content-sub-container'>
              <h1 className='sub-heading-content'>Hi..I'm <span className='sub-name'>Meenakshi</span></h1>
              <h1><span className='sub-name'>Full Stack</span> Web Developer</h1>
              <h4>I am a skilled and passionate MERN stack developer with Experience of creating a responsive website.</h4>
            </div>
          </div>
          <div className='image'>
            <div className='circle-container'></div>
          </div>
        </div>
      </div>

      <div className='second-container'>
        <div className='progress-bar-container'>
          <h1 className='progress-bar-container-heading'>Progress Status</h1>
          <h1 className='sub-skills-name'>React</h1>
        <div className="progress-bar">
          <div className="progress-points react">90%</div>
        </div>
        <h1 className='sub-skills-name' >Node</h1>
        <div className="progress-bar">
          <div className="progress-points node">60%</div>
        </div>
        <h1 className='sub-skills-name'>CSS</h1>
        <div className="progress-bar">
          <div className="progress-points css">80%</div>
        </div>
        <h1 className='sub-skills-name'>Mongo DB</h1>
        <div className="progress-bar">
          <div className="progress-points mongoDB">50%</div>
        </div>
        <h1 className='sub-skills-name'>JavaScript</h1>
        <div className="progress-bar">
          <div className="progress-points js">80%</div>
        </div>
        </div>
        <div className='skills-container'>
          <div className='skills-languages'>
            <div className='skills-languages-heading'>
              <h1>Programming Languages</h1>
            </div>
            <div className='images-section-skills-section'>
              <div className='images-section-skills'>
                <img className='skills-images' src="/react.png" alt="React" />
                <p>React</p>
              </div>

              <div className='images-section-skills'>
                <img className='skills-images' src="/node.png" alt="React" />
                <p>Node</p>
              </div>

              <div className='images-section-skills'>
                <img className='skills-images' src="/js.png" alt="React" />
                <p>Javascript</p>
              </div>

              <div className='images-section-skills'>
                <img className='skills-images' src="/css.png" alt="React" />
                <p>CSS</p>
              </div>

              <div className='images-section-skills'>
                <img className='skills-images' src="/mongoDB.png" alt="React" />
                <p>MongoDB</p>
              </div>
            </div>
          </div>
          <div className='skills-technical'>
            <h1 className='skills-technical-experience-heading'>Skills</h1>
            <ul className='skills-list'>
              <li>Full stack web developer with solid understanding of front-end and back-end technology with database designing.</li>
            <li>Extensively worked with web application development using React JS for client application, Node JS for server side application.</li>
            <li>Good in Database, Used MongoDB to store and retrieve data in specific collections using schema of mongoose.</li>
            <li>Proficient in development of API's using Node JS and express framework.</li>
            <li>Good knowledge in NPM for node JS and frontend package management.</li>
            <li>Basic understanding on React Native which is used for Android and IOS development</li>
           <li>Basic understanding of Minimal UI.</li>
            </ul>
            {/* <p className='experience-content'>My journey as a Full Stack Web Developer is characterized by a dynamic blend of front-end finesse, back-end expertise, database acumen, and API proficiency. By seamlessly integrating React JS, Node JS, MongoDB, and Express, I've consistently delivered innovative web solutions that prioritize user experience and functionality. My commitment to staying current with industry trends and best practices ensures that I am well-equipped to tackle any challenge and bring valuable contributions to any web development endeavor.</p> */}
          </div>
        </div>
      </div>
    </div>
  )
}

export default App;