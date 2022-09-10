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
import MyProjectsAsAdmin from "./components/MyProjects/MyProjectsAsAdmin";
import MyProjectsAsUsers from "./components/MyProjects/MyProjectsAsUsers";
import MyTicketsUsers from "./components/MyTickets/MyTicketsUsers";
import MyTicketsAdmin from "./components/MyTickets/MyTicketsAdmin";
<<<<<<< HEAD
import EditTicketModal from "./components/Modals/EditTicket/EditTicketModal";
=======
import SingleTicket from "./components/SinglePages/SingleTicket/SingleTicket";
>>>>>>> SinglePages

function App() {
  //*toggle project modal
  const [isProjectModalOpen, setIsProjectModalOpen] = useState<boolean>(false);

  //* toggle ticket modal
  const [isTicketModalOpen, setIsTicketModalOpen] = useState<boolean>(false);

  //* toggle edit ticket modal */
  const [isEditTicketModalOpen, setIsEditTicketModalOpen] = useState(true);

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

        {isEditTicketModalOpen && (
          <EditTicketModal
            setIsEditTicketModalOpen={setIsEditTicketModalOpen}
          />
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
          <Route path="/my-projects" element={<MyProjectsAsUsers />} />
          <Route path="/all-projects" element={<MyProjectsAsAdmin />} />
          <Route path="/my-tickets" element={<MyTicketsUsers />} />
          <Route path="/all-tickets" element={<MyTicketsAdmin />} />
          <Route path="/tickets/:ticketId" element={<SingleTicket />} />
        </Routes>
      </Router>
      {/* <Login /> */}
    </div>
  );
}

export default App;
