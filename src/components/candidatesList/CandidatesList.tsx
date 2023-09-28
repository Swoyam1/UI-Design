import "./candidatesList.scss";
import { Divider, Checkbox } from "antd";
import { candidateData } from "../../data/data";

const CandidatesList = () => {
  return (
    <div className="candidatesList">
      {candidateData.map((user) => (
        <>
          <div className="list">
            <Checkbox />
            <div className="candidateIcon">{user.short}</div>
            <div className="candidateDetails">
              <div className="name">{user.name}</div>
              <div className="location">{user.education}</div>
              <div className="education">{user.education}</div>
              <div className="hashtag">
                <span>#top_candidate</span>
                <span>#top_candidate</span>
              </div>
              <div className="preferences">
                <div className="pref">New York</div>
                <div className="pref">Marketing</div>
                <div className="pref">London</div>
              </div>
            </div>
          </div>
          <Divider />
        </>
      ))}
    </div>
  );
};

export default CandidatesList;
