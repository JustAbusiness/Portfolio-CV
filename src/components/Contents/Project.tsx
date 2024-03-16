import { Button, Modal } from "antd";
import { useState } from "react";
function Project() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = () => {
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  const dataProjects = [
    {
      image: "",
      title: "Website Clone Tiki",
      shortDesc:
        "With step-by-step tutorials, hands-on exercises, and expert guidance, embark on a journey to master frontend and backend development by replicating the functionality and design of renowned online stores",
      detail: {
        description: "",
        technology: "",
        member: "",
        role: "",
        demo: "",
        github: "",
      },
    },
    {
      image: "",
      title: "Website Clone Tiki",
      shortDesc:
        "With step-by-step tutorials, hands-on exercises, and expert guidance, embark on a journey to master frontend and backend development by replicating the functionality and design of renowned online stores",
      detail: {
        description: "",
        technology: "",
        member: "",
        role: "",
        demo: "",
        github: "",
      },
    },
    {
      image: "",
      title: "Website Clone Tiki",
      shortDesc:
        "With step-by-step tutorials, hands-on exercises, and expert guidance, embark on a journey to master frontend and backend development by replicating the functionality and design of renowned online stores",
      detail: {
        description: "",
        technology: "",
        member: "",
        role: "",
        demo: "",
        github: "",
      },
    },
    {
      image: "",
      title: "Website Clone Tiki",
      shortDesc:
        "With step-by-step tutorials, hands-on exercises, and expert guidance, embark on a journey to master frontend and backend development by replicating the functionality and design of renowned online stores",
      detail: {
        description: "",
        technology: "",
        member: "",
        role: "",
        demo: "",
        github: "",
      },
    },
  ];

  return (
    <div className="arlo_tm_section" id="projects">
      <div className="arlo_tm_services_wrap">
        <div className="container">
          <div className="arlo_tm_title_holder">
            <h3>Projects</h3>
            <span>Meet our amazing services</span>
          </div>
          <div className="list_wrap">
            <ul>
              {dataProjects.map((project, index) => {
                return (
                  <div className="inner" key={index}>
                    <div className="icon">
                      <img
                        className="svg"
                        src={project.image}
                        alt="camera-diaphragm"
                      />
                    </div>
                    <div className="title_service">
                      <h3>{project.title} </h3>
                    </div>
                    <div className="text">
                      <p>{project.shortDesc}</p>
                    </div>
                  </div>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Project;
