import About from "./Contents/About";
import HomeCV from "./Contents/HomeCV";
import Skills from "./Contents/Skills";
import Project from "./Contents/Project";
import Contact from "./Contents/Contact";

function Rightpart() {
  return (
    <div className="arlo_tm_rightpart">
      <div className="rightpart_inner">
        <HomeCV />

        {/* <!-- ABOUT --> */}
        <About />
        {/* <!-- /ABOUT -->
    
    <!-- SKILLS --> */}
        <Skills />
        {/* <!-- /SKILLS -->
    
    <!-- PROJECTS --> */}
        <Project />

        {/* CONTACT */}
        <Contact />
      </div>
    </div>
  );
}

export default Rightpart;
