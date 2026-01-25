const skillGroups = [
  {
    title: "Frontend",
    skills: [
      { name: "React", icon: "devicon-react-original colored" },
      { name: "JavaScript", icon: "devicon-javascript-plain colored" },
      { name: "HTML", icon: "devicon-html5-plain colored" },
      { name: "CSS", icon: "devicon-css3-plain colored" }
    ]
  },
  {
    title: "Programming",
    skills: [
      { name: "Java", icon: "devicon-java-plain colored" },
      { name: "Python", icon: "devicon-python-plain colored" },
      { name: "C", icon: "devicon-c-plain colored" },
      { name: "MySQL", icon: "devicon-mysql-plain colored" }
    ]
  },
  {
    title: "Tools & Concepts",
    skills: [
      { name: "Git", icon: "devicon-git-plain colored" },
      { name: "GitHub", icon: "devicon-github-original colored" },
      { name: "REST APIs", icon: "devicon-nodejs-plain colored" }
    ]
  }
];

const Skills = () => {
  return (
    <section id="skills" className="section">
      <h2>Skills</h2>

      <div className="skills-groups">
        {skillGroups.map((group) => (
          <div key={group.title} className="skills-card">
            <h3>{group.title}</h3>

            <div className="skills-grid">
              {group.skills.map((skill) => (
                <div key={skill.name} className="skill-item">
                  <i className={skill.icon}></i>
                  <span>{skill.name}</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
