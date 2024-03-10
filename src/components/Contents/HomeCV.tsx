import { TypeAnimation } from "react-type-animation";
import Avatar from "@/assets/img/random.jpg";

function HomeCV() {
  return (
    <div className="arlo_tm_section" id="home">
      <div className="arlo_tm_hero_header_wrap">
        <div className="arlo_tm_universal_box_wrap">
          <div className="bg_wrap">
            <div className="overlay_image hero jarallax" data-speed="0.1"></div>
            <div className="overlay_color hero"></div>
          </div>
          <div className="content hero">
            <div className="inner_content">
              <div className="image_wrap">
                <img src={Avatar} alt="hero" />
              </div>
              <div className="name_holder">
                <h3>
                  <span>PHAM NGOC HUY</span> - (ROBERT)
                </h3>
              </div>
              <div className="text_typing">
                <p>
                  I'm a &nbsp;
                  <span className="arlo_tm_animation_text_word">
                    <TypeAnimation
                      sequence={[
                        "Web Developer",
                        2000,
                        "Cloud Development",
                        2000,
                      ]}
                      wrapper="span"
                      speed={50}
                      repeat={Infinity}
                    />
                  </span>
                </p>
              </div>
            </div>
          </div>
          <div className="arlo_tm_arrow_wrap bounce anchor">
            <a href="#about">
              {/* <i className="xcon-angle-double-down"></i> */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={4}
                stroke="currentColor"
                className="w-6 h-6"
                style={{ width: "24px", height: "24px" }}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M19.5 13.5L12 21m0 0l-7.5-7.5M12 21V3"
                />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomeCV;
