import Leftpart from "../components/Leftpart";
import MobileScreen from "../components/Mobile/MobileScreen";
import PreLoader from "../components/PreLoader";
import Rightpart from "../components/Rightpart";
import { FloatButton } from 'antd';

function Portfolio() {
  return (
    <div className="arlo_tm_wrapper_all">
      <div id="arlo_tm_popup_blog">
        <div className="container">
          <div className="inner_popup scrollable"></div>
        </div>
        <span className="close">
          <a href="#"></a>
        </span>
      </div>

      <PreLoader />
      {/*    <!-- MOBILE MENU --> */}
      <MobileScreen />
      {/* <!-- /MOBILE MENU -->
    
      <!-- CONTENT --> */}
      <div className="arlo_tm_content">
        {/* <!-- LEFTPART --> */}
        <Leftpart />
        {/* <!-- /LEFTPART -->
      
      <!-- RIGHTPART --> */}
        <Rightpart />

        {/* <a className="arlo_tm_totop" href="#"></a> */}
        <FloatButton.BackTop  tooltip="Scroll to top" />
      </div>
    </div>
  );
}

export default Portfolio;
