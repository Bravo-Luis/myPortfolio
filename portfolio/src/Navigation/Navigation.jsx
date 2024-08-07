import { useState, useEffect } from "react";
import NavigationButton from "./NavigationButton";

function Navigation({ selected, setSelected }) {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    function handleResize() {
      setWindowWidth(window.innerWidth);
    }
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <>
      <nav
        style={{
          display: "flex",
          justifyContent: "flex-end",
          position: "fixed",
          right: "0",
          zIndex: "100",
          
        }}
      >
        {["home", "experience", "projects", "skills", "contact"].map((title, index) => (
          <NavigationButton
            title={title}
            index={index}
            selected={selected}
            setSelected={setSelected}
            key={index}
          />
        ))}
      </nav>
    </>
  );
}

export default Navigation;
