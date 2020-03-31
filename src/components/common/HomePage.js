import React from "react";
import { Link } from "react-router-dom";

const HomePage = () => {
  return (
    <div>
      <h1>UTN Red Social</h1>
      <p>Bienenido a la red Social del curso de ReactJS de la UTN</p>
      <Link to='signup'>¿Aun no es miembro? Registrarse</Link>
    </div>
  );
};

export default HomePage;
