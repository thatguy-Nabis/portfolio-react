import { useEffect, useState } from "react";

const projects = [
  {
    title: "Chess Arena",
    description:
      "A two-player chess game built in Java with MySQL for user management and match persistence.",
    tech: ["Java", "MySQL"],
    images: [
      "/projects/chess-arena.png",
      "/projects/chess-arena-1.png",
      "/projects/chess-arena-2.png",
    ],
  },
  {
    title: "ZipIt",
    description:
      "An intelligent image editor using machine learning for image processing and optimization.",
    tech: ["React", "PHP", "MySQL", "Python", "ML"],
    images: [],
  },
  {
    title: "Kriativity",
    description:
      "An online art gallery platform with a recommendation algorithm to personalize content.",
    tech: ["PHP", "MySQL"],
    images: [],
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
  const [activeSlides, setActiveSlides] = useState(() =>
    projects.map(() => 0)
  );

  useEffect(() => {
    const interval = window.setInterval(() => {
      setActiveSlides((currentSlides) =>
        currentSlides.map((slideIndex, projectIndex) => {
          const totalSlides = projects[projectIndex].images.length;
          return totalSlides > 1
            ? (slideIndex + 1) % totalSlides
            : slideIndex;
        })
      );
    }, 3500);

    return () => window.clearInterval(interval);
  }, []);

  const goToSlide = (projectIndex, slideIndex) => {
    setActiveSlides((currentSlides) =>
      currentSlides.map((currentSlide, index) =>
        index === projectIndex ? slideIndex : currentSlide
      )
    );
  };

  const shiftSlide = (projectIndex, direction) => {
    const totalSlides = projects[projectIndex].images.length;

    setActiveSlides((currentSlides) =>
      currentSlides.map((currentSlide, index) => {
        if (index !== projectIndex || totalSlides <= 1) {
          return currentSlide;
        }

        return (currentSlide + direction + totalSlides) % totalSlides;
      })
    );
  };

  return (
    <section id="projects" className="section">
      <h2>Projects</h2>

      <div className="projects-layout">
        {projects.map((project, index) => (
          <div className="project-card" key={project.title}>
            <div className="project-image">
              {project.images.length > 0 ? (
                <div className="project-slides">
                  {project.images.map((image, imageIndex) => (
                    <img
                      key={image}
                      src={image}
                      alt={`${project.title} preview ${imageIndex + 1}`}
                      className={
                        activeSlides[index] === imageIndex
                          ? "project-slide active"
                          : "project-slide"
                      }
                    />
                  ))}
                </div>
              ) : (
                <div className="project-image-placeholder">
                  <span>{project.title}</span>
                  <p>Add project screenshots to public/projects.</p>
                </div>
              )}

              {project.images.length > 1 && (
                <>
                  <button
                    type="button"
                    className="project-slide-button previous"
                    onClick={() => shiftSlide(index, -1)}
                    aria-label={`Previous ${project.title} image`}
                  >
                    {"<"}
                  </button>

                  <button
                    type="button"
                    className="project-slide-button next"
                    onClick={() => shiftSlide(index, 1)}
                    aria-label={`Next ${project.title} image`}
                  >
                    {">"}
                  </button>

                  <div
                    className="project-slide-dots"
                    aria-label={`${project.title} slideshow`}
                  >
                    {project.images.map((_, imageIndex) => (
                      <button
                        key={`${project.title}-${imageIndex}`}
                        type="button"
                        className={
                          activeSlides[index] === imageIndex
                            ? "project-slide-dot active"
                            : "project-slide-dot"
                        }
                        onClick={() => goToSlide(index, imageIndex)}
                        aria-label={`Go to ${project.title} image ${imageIndex + 1}`}
                      />
                    ))}
                  </div>
                </>
              )}
            </div>

            <div className="project-body">
              <h3>{project.title}</h3>

              <div className="project-tech">
                {project.tech.map((tech) => (
                  <div className="project-tech-item" key={tech}>
                    <i className={techIcons[tech]}></i>
                    <span>{tech}</span>
                  </div>
                ))}
              </div>

              <p className="project-description">{project.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
