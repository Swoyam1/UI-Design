import CandidatesList from "../candidatesList/CandidatesList";
import "./candidates.scss";
import { Divider, Checkbox } from "antd";

const Candidates = () => {
  return (
    <div className="candidates">
      <div className="topBar">
        <div className="leftContent">
          <Checkbox />
          <b>247 Candidates</b>
        </div>
        <div className="rightContent">
          <div className="qualify">
            <b>Qualified</b>
          </div>
          <div className="task">
            <b>Task</b>
            <span>25</span>
          </div>
          <div className="disqualify">
            <b>Disqualified</b>
            <span>78</span>
          </div>
        </div>
      </div>
      <Divider />
      <CandidatesList />
    </div>
  );
};

export default Candidates;
