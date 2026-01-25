const About = () => {
  return (
    <section id="about" className="section about">
      <div className="about-content">
        {/* Left text */}
        <div className="about-text">
          <h2>About Me</h2>
          <p>
            I am <strong>Nabis Shrestha</strong>, a Bachelor in Computer
            Application (BCA) student at the National College of Computer
            Studies (NCCS). I have a strong interest in software development
            and enjoy turning ideas into real-world applications.
          </p>

          <p>
            My primary focus is on building clean, scalable, and
            user-friendly web applications using modern technologies.
            I am continuously learning and improving my skills through
            hands-on projects and academic coursework.
          </p>
        </div>

        {/* Right image */}
        <div className="about-image">
          <img src={process.env.PUBLIC_URL + "/about.jpg"} alt="About Nabis Shrestha" />
        </div>
      </div>
    </section>
  );
};

export default About;
