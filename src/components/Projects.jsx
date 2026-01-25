const projects = [
  {
    title: "Chess Arena",
    description:
      "A two-player chess game built in Java with MySQL for user management and match persistence.",
    tech: ["Java", "MySQL"],
    image: "/projects/chess-arena.png",
  },
  {
    title: "ZipIt",
    description:
      "An intelligent image editor using machine learning for image processing and optimization.",
    tech: ["React", "PHP", "MySQL", "Python", "ML"],
    image: "/projects/zipit.png",
  },
  {
    title: "Kriativity",
    description:
      "An online art gallery platform with a recommendation algorithm to personalize content.",
    tech: ["PHP", "MySQL"],
    image: "/projects/kriativity.png",
  },
];

const techIcons = {
  Java: "devicon-java-plain colored",
  MySQL: "devicon-mysql-plain colored",
  React: "devicon-react-original colored",
  PHP: "devicon-php-plain colored",
  Python: "devicon-python-plain colored",
  ML: "devicon-tensorflow-original colored",
};

const Projects = () => {
  return (
    <section id="projects" className="section">
      <h2>Projects</h2>

      <div className="projects-layout">
        {projects.map((project, index) => (
          <div className="project-card" key={index}>
            {/* Image */}
            <div className="project-image">
              <img src={project.image} alt={project.title} />
            </div>

            {/* Content */}
            <div className="project-body">
              <h3>{project.title}</h3>

              <div className="project-tech">
                {project.tech.map((tech, i) => (
                  <div className="project-tech-item" key={i}>
                    <i className={techIcons[tech]}></i>
                    <span>{tech}</span> {/* hidden by CSS */}
                  </div>
                ))}
              </div>

              <p className="project-description">
                {project.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
