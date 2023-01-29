import React, { useState, useEffect } from "react";
import Field from "../components/molecules/field";

function Home() {
  const [cursorX, setCursorX] = useState(0);
  const [cursorY, setCursorY] = useState(0);
  const [color, setColor] = useState("");
  const [display, setdisplay] = useState("none");

  useEffect(() => {
    window.addEventListener("mousemove", handleMouseMove);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  function handleMouseMove(event) {
    setCursorX(event.clientX);
    setCursorY(event.clientY);
  }

  function handleHover(event, color, display) {
    setColor(color);
    setdisplay(display);
  }

  return (
    <div className="hp-container">
      <div
        onMouseEnter={(e) => handleHover(e, "blue", "block")}
        onMouseLeave={(e) => handleHover(e, "", "none")}
      >
        <Field
          id="leftField"
          testId="_leftField"
          size="lg"
          variant="outline"
          content="Provider"
          activeBg="blue"
          activeBorder="black"
          height="100px"
          width="200px"
          fontSize="40px"
          border="5px solid"
          borderColor="black"
          zIndex="9"
        />
      </div>
      <div
        onMouseEnter={(e) => handleHover(e, "red", "block")}
        onMouseLeave={(e) => handleHover(e, "", "none")}
      >
        <Field
          id="rightField"
          testId="_rightField"
          size="lg"
          variant="outline"
          content="Customer"
          activeBg="red"
          activeBorder="black"
          height="100px"
          width="200px"
          fontSize="40px"
          border="5px solid"
          borderColor="black"
          zIndex="9"
        />
      </div>
      <div
        style={{
          zIndex: 7,
          display: display,
          width: "50px",
          height: "50px",
          borderRadius: "50%",
          backgroundColor: color,
          position: "absolute",
          top: cursorY - 18,
          left: cursorX - 18,
        }}
      ></div>
    </div>
  );
}

export default Home;
