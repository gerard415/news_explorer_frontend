import "./About.css";
import Author from "../../images/selfie.jpeg";

function About() {
  return (
    <div className="about">
      <div className="about__container">
        <img src={Author} alt="author" className="about__author-profile" />
        <div className="about__author-info">
          <h2 className="about__author-title">About the author</h2>
          <p className="about__author-caption">
           I’m Gerard, a full-stack software engineer and software engineering graduate, now looking to leverage my skills to advance in the web development and tech industy   opportunities in the web development and tech industry.
          </p>
          <p className="about__author-caption">
          After graduating with a bachelors degree in software engineering, I have since furthered my softwar
          skills, building countless of projects in Javascript, Typescript, React, Python, NodeJs, NextJs and more.
          I recently joined the TripleTen to fine-tune my tech skills. I feel so much joy and passion in creating 
          creative and problem solving applications. I am self-driven, detail-oriented, and thrive in collaborative 
          environments where I can contribute to meaningful projects. I'm eager to bring my creativity, discipline, 
          and technical skills to the world of tech.
          </p>
        </div>
      </div>
    </div>
  );
}
export default About;
