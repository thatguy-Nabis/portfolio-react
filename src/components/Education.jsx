const Education = () => {
  return (
    <section id="education" className="section education">
      <h2>Education</h2>

      <div className="education-card">
        <div className="education-header">
          <h3>Bachelor in Computer Application</h3>
          <span className="education-status">Currently Pursuing</span>
        </div>

        <p className="education-institute">
          <a href="https://nccs.edu.np/college" target="_blank" rel="noreferrer">
            National College of Computer Studies (NCCS)
          </a>
        </p>

        <div className="education-meta">
          <span>Relevant Coursework:</span>
          <ul>
            <li>Data Structures & Algorithms</li>
            <li>Object-Oriented Programming</li>
            <li>Database Management Systems</li>
            <li>Web Technologies</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Education;
