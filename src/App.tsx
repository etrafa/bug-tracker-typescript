//*react
import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

//*components
// import Login from "./components/Login/Login";
import Navbar from "./components/Navbar/Navbar";
import Sidebar from "./components/Sidebar/Sidebar";
import DashboardHome from "./components/Dashboard/DashboardHome";
import ManageRoleAssignment from "./components/ManageRoleAssignment/ManageRoleAssignment";
import ManageProjectUsers from "./components/ManageProjectUsers/ManageProjectUsers";
import Profile from "./components/Profile/Profile";

function App() {
  //*toggle project modal
  const [isProjectModalOpen, setIsProjectModalOpen] = useState<boolean>(false);

  //* toggle ticket modal
  const [isTicketModalOpen, setIsTicketModalOpen] = useState<boolean>(false);

  return (
    <div>
      <Router>
        <Sidebar />
        <Routes>
          <Route path="/role-assignment" element={<ManageRoleAssignment />} />
          <Route path="/manage-project-user" element={<ManageProjectUsers />} />
          <Route path="/my-profile" element={<Profile />} />
        </Routes>
      </Router>
      {/* <Login /> */}
      {/* <Navbar
        setIsProjectModalOpen={setIsProjectModalOpen}
        setIsTicketModalOpen={setIsTicketModalOpen}
      />
      <DashboardHome /> */}
    </div>
  );
}

export default App;
