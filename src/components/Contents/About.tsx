import myCV from '@/assets/CV-Pham-Ngoc-Huy (1).docx.pdf'
import AboutAvatar from '@/assets/img/about/mybg.jpeg'

function About() {
  return (
    <div>
      <div className="arlo_tm_section relative" id="about" style={{paddingTop: '100px'}}>
        <div className="arlo_tm_about_wrapper_all">
          <div className="container">
            <div className="arlo_tm_title_holder">
              <h3>About Me</h3>
              <span>Main informations about me</span>
            </div>
            <div className="arlo_tm_about_wrap">
              <div className="author_wrap">
                <div className="leftbox">
                <img src={AboutAvatar} alt="550x640" style={{width: '550px', height: '450px', borderRadius: '2%', objectFit: 'cover'}} />
                  <div
                    className="about_image_wrap parallax"
                    data-relative-input="true"
                  >
                  </div>
                </div>
                <div className="rightbox">
                  <div className="arlo_tm_mini_title_holder">
                    <h4>
                      Hi There, 
                      <span className="arlo_tm_animation_text_word"></span>
                    </h4>
                  </div>
                  <div className="definition">
                    <p style={{ marginBottom: '10px'}}>
                      My name is <strong>Pham Ngoc Huy</strong>. I am a Web
                      Developer, and I'm very passionate and dedicated to my
                      work. With 1 year experience as a professional Web
                      developer, I have acquired the skills and knowledge
                      necessary to make your project a success.
                    </p>
                    <p>  
                      I enjoy every
                      step of the design process, from discussion and
                      collaboration to concept and execution, but I find the
                      most satisfaction in seeing the finished product do
                      everything for you that it was created to do.
                    </p>
                  </div>
                  <div className="about_short_contact_wrap">
                    <ul>
                      <li>
                        <span>
                          <label>Birthday:</label> 27.03.1999
                        </span>
                      </li>
                      <li>
                        <span>
                          <label>City:</label> Ho Chi Minh, VN
                        </span>
                      </li>
                      <li>
                        <span>
                          <label>Gender</label> Male
                        </span>
                      </li>
                      <li>
                        <span>
                          <label>Study:</label> RMIT University 
                        </span>
                      </li>
                      <li>
                        <span>
                          <label>Degree:</label> Bachelor
                        </span>
                      </li>
                      <li>
                        <span>
                          <label>Linkedin:</label>{" "}
                          <a href="www.linkedin.com/in/robert-pahm/">robert-pahm</a>
                        </span>
                      </li>
                      <li>
                        <span>
                          <label>Mail:</label>{" "}
                          <a href="huysanti123456@gmail.com">
                            huysanti123456&#64;gmail.com
                          </a>
                        </span>
                      </li>
                      <li>
                        <span>
                          <label>Github:</label>{" "}
                          <a href="https://github.com/JustAbusiness">JustAbusiness</a>
                        </span>
                      </li>
                    </ul>
                  </div>
                  <div className="buttons_wrap">
                    <ul>
                      <li>
                        <a href={myCV} download>
                          <span>Download CV</span>
                        </a>
                      </li>
                      <li className="anchor">
                        <a href="https://www.facebook.com/dejavu354321">
                          <span>Send Message</span>
                        </a>
                      </li>
                    </ul>
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

export default About;
