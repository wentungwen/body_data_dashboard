import "./styles/style.css";
import MainPage from "./pages/MainPage";
import SideBar from "./components/SideBar";
import { useState } from "react";
import { RxHamburgerMenu } from "react-icons/rx";

function App() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const closeSidebar = () => setIsSidebarOpen(false);
  const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);

  return (
    <div className={`App ${isSidebarOpen ? "sidebar-open" : ""}`}>
      <SideBar onClose={closeSidebar} />
      {isSidebarOpen || (
        <button className="sidebar-btn" onClick={toggleSidebar}>
          <RxHamburgerMenu />
        </button>
      )}
      <MainPage />
    </div>
  );
}

export default App;
