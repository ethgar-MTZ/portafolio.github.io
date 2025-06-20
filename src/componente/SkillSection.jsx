import React from "react";

export default function SkillsSection() {
  return (
    <div className="section" data-anchor="skills">
      <div className="content">
        <h1 className="wow fadeInDown" data-wow-delay="0.2s">Tecnologías que he trabajado</h1>
        <p className="wow fadeInDown" data-wow-delay="0.2s">Estas son algunas skills que he trasbajado.</p>

        <div className="wow fadeInUp container-skillbar">
          {[
            { title: "HTML5", percent: "90%", color: "#DD1E2F" },
            { title: "CSS3", percent: "80%", color: "#EBB035" },
            { title: "Photoshop", percent: "75%", color: "#218559" },
            { title: "Rails", percent: "45%", color: "#6840D4" },
            { title: "jQuery", percent: "30%", color: "#06A2CB" },
            { title: "PHP", percent: "20%", color: "#AB4DD2" },
          ].map(skill => (
            <div className="skillbar clearfix" key={skill.title} data-percent={skill.percent}>
              <div className="skillbar-title" style={{ background: skill.color }}><span>{skill.title}</span></div>
              <div className="skillbar-bar" style={{ background: skill.color }}></div>
              <div className="skill-bar-percent">{skill.percent}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}