import "./filtered.scss";
import { searchData } from "../../data/data.js";
import { GrNotes } from "react-icons/gr";
import { BiChevronDown } from "react-icons/bi";

const Filtered = () => {
  return (
    <div className="filtered">
      <div className="item topbar">
        <b>Filters</b>
        <p>0 Selected</p>
      </div>
      <hr />
      <div className="item lists ">
        {searchData.map((item) => (
          <div className="list">
            <div className="listContent">
              <GrNotes />
              {item}
            </div>
            <div className="dropdownIcon">
              <BiChevronDown />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Filtered;
