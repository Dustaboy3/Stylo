import React from "react";
import Field from "../components/molecules/field";

function Home() {
  return (
    <div className="hp-container">
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
      />
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
      />
    </div>
  );
}

export default Home;
