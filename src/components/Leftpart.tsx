import desktopLogo from "@/assets/img/about/huy.jpeg";
import { useEffect, useState } from "react";

interface IProps {
  hideLeftpart: boolean;
  setHideLeftpart: (value: boolean) => void;
}

function Leftpart(props: IProps) {
  const [activeTab, setActiveTab] = useState<string>("home");

  useEffect(() => {
    const { hash } = window.location;

    if (hash) {
      const tab = hash.replace("#", "");
      setActiveTab(tab);
      const section = document.querySelector(`${hash}`);
      if (section) {
        section.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    }
  }, []);

  const handleClickTab = (
    tab: string,
    event: React.MouseEvent<HTMLAnchorElement, MouseEvent>
  ) => {
    event.preventDefault();
    setActiveTab(tab);

    const section = document.querySelector(`#${tab}`);
    if (section) {
      section.scrollIntoView({ behavior: "smooth", block: "start" });
      setTimeout(() => {
        window.location.hash = tab;
      }, 200);
    }
  };
  return (
    <div
      className={
        props.hideLeftpart
          ? "arlo_tm_leftpart_wrap opened"
          : "arlo_tm_leftpart_wrap"
      }
    >
      <div className="leftpart_inner">
        <div className="logo_wrap">
          <a href="#">
            <img
              src={desktopLogo}
              alt="desktop-logo"
              style={{ width: "200px", height: "200px", borderRadius: "50%" }}
            />
          </a>
        </div>
        <div className="menu_list_wrap">
          <ul className="anchor_nav">
            <li>
              <a
                href="#home"
                className={activeTab === "home" ? "active" : ""}
                onClick={(
                  event: React.MouseEvent<HTMLAnchorElement, MouseEvent>
                ) => handleClickTab("home", event)}
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="#about"
                className={activeTab === "about" ? "active" : ""}
                onClick={(
                  event: React.MouseEvent<HTMLAnchorElement, MouseEvent>
                ) => handleClickTab("about", event)}
              >
                About
              </a>
            </li>
            <li>
              <a
                href="#skills"
                className={activeTab === "skills" ? "active" : ""}
                onClick={(
                  event: React.MouseEvent<HTMLAnchorElement, MouseEvent>
                ) => handleClickTab("skills", event)}
              >
                Skills
              </a>
            </li>
            <li>
              <a
                href="#projects"
                className={activeTab === "projects" ? "active" : ""}
                onClick={(
                  event: React.MouseEvent<HTMLAnchorElement, MouseEvent>
                ) => handleClickTab("projects", event)}
              >
                Projects
              </a>
            </li>
            <li>
              <a
                href="#contact"
                className={activeTab === "contact" ? "active" : ""}
                onClick={(
                  event: React.MouseEvent<HTMLAnchorElement, MouseEvent>
                ) => handleClickTab("contact", event)}
              >
                Contact
              </a>
            </li>
          </ul>
        </div>

        <a
          className={
            props.hideLeftpart ? "arlo_tm_resize opened" : "arlo_tm_resize"
          }
          href="#"
          onClick={() => props.setHideLeftpart(!props.hideLeftpart)}
        >
          {props.hideLeftpart === false ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={3}
              stroke="currentColor"
              className={
                props.hideLeftpart
                  ? `w-6 h-6 hover:text-white opened`
                  : `w-6 h-6 hover:text-white`
              }
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M18.75 19.5l-7.5-7.5 7.5-7.5m-6 15L5.25 12l7.5-7.5"
              />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M11.25 4.5l7.5 7.5-7.5 7.5m-6-15l7.5 7.5-7.5 7.5"
              />
            </svg>
          )}
        </a>
      </div>
    </div>
  );
}

export default Leftpart;
