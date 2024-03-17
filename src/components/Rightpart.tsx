import About from "./Contents/About";
import HomeCV from "./Contents/HomeCV";
import Skills from "./Contents/Skills";
import Project from "./Contents/Project";
import Contact from "./Contents/Contact";

interface IProps {
  hideLeftpart: boolean;
  setHideLeftpart: (value: boolean) => void;
}
function Rightpart(props: IProps) {
  return (
    <div className={props.hideLeftpart ? "arlo_tm_rightpart_wrap opened" : "arlo_tm_rightpart"}>
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
