import { Input } from "antd";
import { BsSearch } from "react-icons/bs";
import "./search.scss";

const Search = () => {
  return (
    <div className="search">
      <Input
        placeholder="Search by name, edu, exp or #tag"
        prefix={<BsSearch />}
      />
    </div>
  );
};

export default Search;
