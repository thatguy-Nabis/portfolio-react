import ProjectCard from "./ProjectCard";

const projects = [
  {
    title: "Personal Portfolio",
    image: "/projects/portfolio.png",
    tools: [
      "devicon-react-original",
      "devicon-javascript-plain",
      "devicon-css3-plain"
    ],
    description:
      "A modern, responsive personal portfolio designed to showcase my work and skills."
  },
  {
    title: "Student Management System",
    image: "/projects/student-system.png",
    tools: [
      "devicon-java-plain",
      "devicon-mysql-plain"
    ],
    description:
      "A CRUD-based system for managing student records with a structured backend."
  }
];

const Projects = () => {
  return (
    <section id="projects" className="section">
      <h2>Projects</h2>

      <div className="projects-layout">
        {projects.map((project, index) => (
          <ProjectCard key={index} {...project} />
        ))}
      </div>
    </section>
  );
};

export default Projects;
