import { useEffect, useState } from "react";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);

      /* 
        When user is in Hero area (top of page),
        clear active state so no link is highlighted
      */
      if (window.scrollY < 100) {
        setActive("");
        return;
      }

      const sections = document.querySelectorAll("section[id]");

      sections.forEach((section) => {
        const top = section.offsetTop - 120;
        const height = section.offsetHeight;
        const id = section.getAttribute("id");

        if (
          window.scrollY >= top &&
          window.scrollY < top + height
        ) {
          setActive(id);
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={`navbar ${scrolled ? "scrolled" : ""}`}>
      <h2>
        Nabis<span>.</span>
      </h2>

      <ul>
        {["about", "skills", "education", "projects", "contact"].map((item) => (
          <li key={item}>
            <a
              href={`#${item}`}
              className={active === item ? "active" : ""}
            >
              {item.charAt(0).toUpperCase() + item.slice(1)}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
