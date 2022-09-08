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
import NewProjectModal from "./components/Modals/NewProject/NewProjectModal";
import NewTicketModal from "./components/Modals/NewTicket/NewTicketModal";
import AssignUserModal from "./components/Modals/AssignUser/AssignUserModal";
import MyProjectsUsers from "./components/MyProjects/MyProjectsUsers";
import MyProjectsAdmin from "./components/MyProjects/MyProjectsAdmin";
import MyTicketsUsers from "./components/MyTickets/MyTicketsUsers";
import MyTicketsAdmin from "./components/MyTickets/MyTicketsAdmin";

function App() {
  //*toggle project modal
  const [isProjectModalOpen, setIsProjectModalOpen] = useState<boolean>(false);

  //* toggle ticket modal
  const [isTicketModalOpen, setIsTicketModalOpen] = useState<boolean>(false);

  //*toggle assign user modal
  const [isAssignedUserModalOpen, setIsAssignedUserModalOpen] = useState(false);

  return (
    <div>
      <Router>
        {isTicketModalOpen && (
          <NewTicketModal setIsTicketModalOpen={setIsTicketModalOpen} />
        )}
        {isProjectModalOpen && (
          <NewProjectModal setIsProjectModalOpen={setIsProjectModalOpen} />
        )}
        {isAssignedUserModalOpen && (
          <AssignUserModal
            setIsAssignedUserModal={setIsAssignedUserModalOpen}
          />
        )}
        <Sidebar />
        <Navbar
          setIsProjectModalOpen={setIsProjectModalOpen}
          setIsTicketModalOpen={setIsTicketModalOpen}
        />
        <Routes>
          <Route path="/" element={<DashboardHome />} />
          <Route path="/role-assignment" element={<ManageRoleAssignment />} />
          <Route
            path="/manage-project-user"
            element={
              <ManageProjectUsers
                setIsAssignedUserModalOpen={setIsAssignedUserModalOpen}
              />
            }
          />
          <Route path="/my-profile" element={<Profile />} />
          <Route path="/my-projects" element={<MyProjectsUsers />} />
          <Route path="/all-projects" element={<MyProjectsAdmin />} />
          <Route path="/my-tickets" element={<MyTicketsUsers />} />
          <Route path="/all-tickets" element={<MyTicketsAdmin />} />
        </Routes>
      </Router>
      {/* <Login /> */}
    </div>
  );
}

export default App;
