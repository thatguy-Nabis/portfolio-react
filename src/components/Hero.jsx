const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-content">
        {/* Left side */}
        <div className="hero-text">
          <h1>Nabis Shrestha</h1>
          <p>
            Student Developer passionate about building clean, efficient, and
            user-friendly applications.
          </p>

          <div className="hero-socials">
            <a
              href="https://github.com/thatguy-Nabis"
              target="_blank"
              rel="noreferrer"
            >
              <i className="devicon-github-original github-icon"> </i>
              GitHub
            </a>
            <a
              href="https://linkedin.com/in/nabis-shrestha-268114288"
              target="_blank"
              rel="noreferrer"
            >
              <i className="devicon-linkedin-plain colored"> </i>
              LinkedIn
            </a>
          </div>
        </div>

        {/* Right side */}
        <div className="hero-image">
  <img src={process.env.PUBLIC_URL + '/profile.jpg'} alt="Nabis Shrestha" />
</div>

    </section>
  );
};

export default Hero;
