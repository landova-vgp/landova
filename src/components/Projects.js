import './Projects.css';
import projectImage from '../assets/project-1.png';

function Projects() {
  return (
    <div className="projects-section" id="projects">
      <h2 className="projects-title">Projects</h2>
      <article className="project-card">
        <a href="/project-detail" className="project-link">
          <div className="project-image">
            <img src={projectImage} alt="Project Thumbnail" />
          </div>
          <h2 className="project-title">
            <small>No.001</small> In Between OMR – GST – onto Chengalpattu – Thiruporur Road
          </h2>
          <p className="project-desc">Kottamedu Junction Keelu</p>
          <i className="project-arrow icon">
            <svg width="9" height="13" viewBox="0 0 9 13">
                <use href="#svg-next" />
            </svg>
          </i>
        </a>
      </article>
    </div>
  );
}

export default Projects;
