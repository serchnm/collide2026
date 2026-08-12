import React from "react";
import drSquatch from "../../image/conference.jpg";
import "./hero.css";


const hero = ({ sharedData }) => {

  return (
    <section id="hero-section" className="hero">
      <div className="hero-overlay" />

      <div className="hero-content">
        <span>{sharedData.staff}</span>
        <div>
          {/* <img src={drSquatch} alt={`project`} /> */}
          <p>Bienvenidos a <br /> Collidess</p>
        </div>
      </div>
      
    </section>
  );
};

export default hero;
