import Select from "react-select";
import {
  RiUserVoiceLine,
  RiUserFollowLine,
  RiUserUnfollowLine,
} from "react-icons/ri";
import { GoMail, GoTag } from "react-icons/go";
import "./navbar.scss";

import { options } from "../../data/data";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="title">
        <h3>London Internship Program</h3>
        <br />
        <p>London</p>
      </div>
      <div className="items">
        <div className="dropdown">
          <Select placeholder="Opportunity Browsing" options={options} />
        </div>
        <div className="iconsDrop">
          <div className="icon">
            <GoTag />
          </div>
          <div className="icon">
            <RiUserUnfollowLine color="#A80000" />
          </div>
          <div className="icon">
            <RiUserFollowLine />
          </div>
          <div className="icon">
            <RiUserVoiceLine />
          </div>
          <div className="icon">
            <GoMail />
          </div>
          <Select
            id="create"
            placeholder="Move to Video Interview"
            options={options}
          />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
