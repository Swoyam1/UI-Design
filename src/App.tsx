import Content from "./components/content/Content";
import Navbar from "./components/navbar/Navbar";
import Sidebar from "./components/sidebar/Sidebar";
import "./styles/global.scss";

function App() {
  return (
    <div className="main">
      <div className="sidebarContainer">
        <Sidebar />
      </div>
      <div className="mainContainer">
        <Navbar />
        <Content />
      </div>
    </div>
  );
}

export default App;
