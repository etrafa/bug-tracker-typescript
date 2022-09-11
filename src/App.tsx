//*react
import { useState, useEffect } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";

//*components
import Login from "./components/Login/Login";
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
import { useAuth } from "./firebase/firebaseConfig";

function App() {
  //*toggle project modal
  const [isProjectModalOpen, setIsProjectModalOpen] = useState<boolean>(false);

  //* toggle ticket modal
  const [isTicketModalOpen, setIsTicketModalOpen] = useState<boolean>(false);

  //*toggle assign user modal
  const [isAssignedUserModalOpen, setIsAssignedUserModalOpen] = useState(false);

  const currentUser = useAuth(); //get current user
  const navigate = useNavigate();

  //* NAVIGATE USER TO LOGIN PAGE IF NOT LOGGED IN YET, OTHERWISE SHOW HOME PAGE
  useEffect(() => {
    if (currentUser) navigate("/");
    else navigate("/log-in");
  }, [currentUser]);

  return (
    <>
      {/* //* MODALS // */}
      {isTicketModalOpen && (
        <NewTicketModal setIsTicketModalOpen={setIsTicketModalOpen} />
      )}
      {isProjectModalOpen && (
        <NewProjectModal setIsProjectModalOpen={setIsProjectModalOpen} />
      )}
      {isAssignedUserModalOpen && (
        <AssignUserModal setIsAssignedUserModal={setIsAssignedUserModalOpen} />
      )}
      {/* //* ------------------------ // */}
      {/* //* ONLY SHOW IF USER LOGGED IN // */}
      {currentUser && <Sidebar />}
      {currentUser && (
        <Navbar
          setIsProjectModalOpen={setIsProjectModalOpen}
          setIsTicketModalOpen={setIsTicketModalOpen}
        />
      )}
      {/* //* ------------------------ // */}
      <Routes>
        <Route path="/log-in" element={<Login />} />
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
      </Routes>
    </>
  );
}

export default App;
