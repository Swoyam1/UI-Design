import Candidates from "../candidates/Candidates";
import Filtered from "../filtered/Filtered";
import Search from "../search/Search";
import "./content.scss";

const Content = () => {
  return (
    <div className="content">
      <div className="searchContainer">
        <Search />
        <div className="filter">
          <Filtered />
        </div>
      </div>
      <div className="candidateContainer">
        <Candidates />
      </div>
    </div>
  );
};

export default Content;
