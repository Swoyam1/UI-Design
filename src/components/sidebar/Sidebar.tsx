import "./sidebar.scss";
import { GoHome } from "react-icons/go";
import { BsPeople, BsCalendarCheck, BsShare } from "react-icons/bs";
import { RiNewspaperLine } from "react-icons/ri";
import { GrNotes } from "react-icons/gr";
import { FiSettings } from "react-icons/fi";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="icons">
        <div className="img">
          <img src="culture.png" alt="" />
        </div>
        <div className="home icon">
          <GoHome />
        </div>
        <div className="users icon">
          <BsPeople />
        </div>
        <div className="calendar icon">
          <BsCalendarCheck />
        </div>
        <div className="share icon">
          <BsShare />
        </div>
        <div className="paper icon">
          <RiNewspaperLine />
        </div>
        <div className="notes icon">
          <GrNotes />
        </div>
      </div>
      <div className="settings">
        <div className="settingIcon">
          <FiSettings />
        </div>
      </div>
    </div>
  );
};

export default Sidebar;

// GoHome BsPeople BsCalendarCheck BsShare RiNewspaperLine BsHeart GrNotes FiSettings
