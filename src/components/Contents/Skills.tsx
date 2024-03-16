import ProgressBar from "@ramonak/react-progress-bar";

function Skills() {
  return (
    <div className="arlo_tm_section" id="skills">
      <div className="arlo_tm_skills_wrap">
        <div className="container">
          <div className="arlo_tm_title_holder">
            <h3>SKILLS</h3>
            <span>About my skills</span>
          </div>
          <div className="inner_wrap">
            <div className="leftbox">
              <div className="arlo_tm_mini_title_holder">
                <h4>Web Development Skills</h4>
              </div>
              <p>
                Proficient in HTML, CSS, and JavaScript for creating dynamic and
                engaging user interfaces. Experienced with popular frameworks
                such as React.js, Next.js, and Vue.js. Skilled in using Figma
                for UI/UX design.
                <span style={{ marginBottom: "20px", display: "block" }}></span>
                Experienced in Laravel and Node.js, with an emphasis on
                Express.js for developing strong server-side apps and APIs.
                Experienced with both relational (PostgreSQL) and noSQL
                (MongoDB) databases.
              </p>
            </div>
            <div className="rightbox">
              <div className="progress_bar_wrap_total">
                <div
                  className="arlo_tm_progress_wrap"
                  data-size="small"
                  data-round="c"
                  data-strip="off"
                >
                  <div style={{ marginBottom: "20px" }}>
                    <span
                      style={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "space-between",
                      }}
                    >
                      <span className="label">HTML/ CSS/ JavaScript </span>
                      <span className="number">80%</span>
                    </span>
                    <div className="arlo_tm_bar_bg">
                      <div className="arlo_tm_bar_wrap">
                        <ProgressBar
                          bgColor={"#333"}
                          height="8px"
                          isLabelVisible={false}
                          completed={80}
                        />
                      </div>
                    </div>
                  </div>
                  <div style={{ marginBottom: "20px" }}>
                    <span
                      style={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "space-between",
                      }}
                    >
                      <span className="label">
                        React JS / Next JS (Typescript)
                      </span>
                      <span className="number">85%</span>
                    </span>
                    <div className="arlo_tm_bar_bg">
                      <div className="arlo_tm_bar_wrap">
                        <ProgressBar
                          bgColor={"#333"}
                          height="8px"
                          isLabelVisible={false}
                          completed={80}
                        />
                      </div>
                    </div>
                  </div>
                  <div style={{ marginBottom: "20px" }}>
                    <span
                      style={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "space-between",
                      }}
                    >
                      <span className="label">Vue JS</span>
                      <span className="number">90%</span>
                    </span>
                    <div className="arlo_tm_bar_bg">
                      <div className="arlo_tm_bar_wrap">
                        <ProgressBar
                          bgColor={"#333"}
                          height="8px"
                          isLabelVisible={false}
                          completed={90}
                        />
                      </div>
                    </div>
                  </div>
                  <div style={{ marginBottom: "20px" }}>
                    <span
                      style={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "space-between",
                      }}
                    >
                      <span className="label">Figma Desgin </span>
                      <span className="number">75%</span>
                    </span>
                    <div className="arlo_tm_bar_bg">
                      <div className="arlo_tm_bar_wrap">
                        <ProgressBar
                          bgColor={"#333"}
                          height="8px"
                          isLabelVisible={false}
                          completed={75}
                        />
                      </div>
                    </div>
                  </div>
                  <div style={{ marginBottom: "20px" }}>
                    <span
                      style={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "space-between",
                      }}
                    >
                      <span className="label">Laravel (PHP)</span>
                      <span className="number">90%</span>
                    </span>
                    <div className="arlo_tm_bar_bg">
                      <div className="arlo_tm_bar_wrap">
                        <ProgressBar
                          bgColor={"#333"}
                          height="8px"
                          isLabelVisible={false}
                          completed={90}
                        />
                      </div>
                    </div>
                  </div>
                  <div style={{ marginBottom: "20px" }}>
                    <span
                      style={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "space-between",
                      }}
                    >
                      <span className="label">NodeJS / Express JS </span>
                      <span className="number">70%</span>
                    </span>
                    <div className="arlo_tm_bar_bg">
                      <div className="arlo_tm_bar_wrap">
                        <ProgressBar
                          bgColor={"#333"}
                          height="8px"
                          isLabelVisible={false}
                          completed={70}
                        />
                      </div>
                    </div>
                  </div>
                  <div style={{ marginBottom: "10px" }}>
                    <span
                      style={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "space-between",
                      }}
                    >
                      <span className="label">Database Postgres / MongoDB</span>
                      <span className="number">85%</span>
                    </span>
                    <div className="arlo_tm_bar_bg">
                      <div className="arlo_tm_bar_wrap">
                        <ProgressBar
                          bgColor={"#333"}
                          height="8px"
                          isLabelVisible={false}
                          completed={85}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Skills;
