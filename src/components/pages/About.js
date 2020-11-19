import React from "react";

function About(props) {
  console.log(props);
  return (
    <div>
      <h1 className="display-4">{props.name}</h1>
      <p className="lead">Simple app to manage contacts</p>
      <p className="text-secondary">Version 1.0.0</p>
    </div>
  );
}

export default About;
