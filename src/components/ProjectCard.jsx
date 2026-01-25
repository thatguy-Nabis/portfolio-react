const ProjectCard = ({ image, title, tools, description }) => {
  return (
    <article className="project-card">
      <div className="project-image">
        <img src={image} alt={title} />
      </div>

      <div className="project-body">
        <h3>{title}</h3>

        <div className="project-tools">
          {tools.map((tool) => (
            <i key={tool} className={`${tool} colored`} />
          ))}
        </div>

        <p className="project-description">{description}</p>
      </div>
    </article>
  );
};

export default ProjectCard;
