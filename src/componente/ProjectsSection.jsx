import React from "react";

export default function ProjectsSection() {
  const projects = [
    {
      title: "XFAIRE",
      desc: "Digital streaming service",
      img: "https://s3-us-west-2.amazonaws.com/bradengelhardt/assets/xfaire.jpg"
    },
    {
      title: "MACHETE ENERGY",
      desc: "Energy drink website",
      img: "https://s3-us-west-2.amazonaws.com/bradengelhardt/assets/machete.jpg"
    },
    {
      title: "PORTFOLIO",
      desc: "Mockup of a personal portfolio I was working on for a friend.",
      img: "https://s3-us-west-2.amazonaws.com/bradengelhardt/assets/cascioportfolio.jpg"
    },
    {
      title: "THATONEBLOG",
      desc: "Minimalist blogging platform.",
      img: "https://s3-us-west-2.amazonaws.com/bradengelhardt/assets/blog.jpg"
    },
    {
      title: "PIXBORED",
      desc: "Website for sharing images and gifs.",
      img: "https://s3-us-west-2.amazonaws.com/bradengelhardt/assets/pixbored.jpg"
    },
    {
      title: "PERSONAL WEBSITE",
      desc: "Responsive vertical/horizontal header website theme.",
      img: "https://s3-us-west-2.amazonaws.com/bradengelhardt/assets/personalsite.jpg"
    },
  ];

  return (
    <div className="section" data-anchor="projects">
      <div className="content-slide">
        {projects.map((project, i) => (
          <div className="slide" key={i}>
            <h1>{project.title}</h1>
            <p>{project.desc}</p>
            <img data-src={project.img} alt={project.title} />
          </div>
        ))}
      </div>
    </div>
  );
}