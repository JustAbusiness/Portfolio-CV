import desktopLogo from "@/assets/img/about/huy.jpeg";

interface IProps {
  hideLeftpart: boolean;
  setHideLeftpart: (value: boolean) => void;
}

function Leftpart(props: IProps) {
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
              <a href="#home">Home</a>
            </li>
            <li>
              <a href="#about">About</a>
            </li>
            <li>
              <a href="#skills">Skills</a>
            </li>
            <li>
              <a href="#projects">Projects</a>
            </li>
            <li>
              <a href="#contact">Contact</a>
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
