import { FC } from "react";
import { useGetSingleDoc } from "../../customHooks/useGetSingleDoc";
import { useAuth } from "../../firebase/firebaseConfig";
import { INavProps } from "../../Interfaces/NavbarInterface";
import CloseButton from "../../Utilities/Buttons/CloseButton";
import SidebarElements from "../../Utilities/SidebarElements/SidebarElements";

import {
  dashboardHome,
  manageRoleAssignment,
  manageProjectUsers,
  myProjects,
  myTickets,
  allProjects,
  allTickets,
  profile,
  logout,
} from "../Sidebar/SidebarIcons";

//logout function
import { firebaseLogout } from "../../firebase/FirebaseAuthFunctions/firebaseLogout";

const NavbarSmallScreen: FC<INavProps> = ({
  setIsNavbarOpen,
  setIsTicketModalOpen,
  setIsProjectModalOpen,
}) => {
  const currentUser = useAuth();

  const { dbData } = useGetSingleDoc("users", currentUser?.uid); //get current user

  return (
    <div className="w-full lg:hidden min-h-screen bg-gray-200 fixed top-0 bottom-0 z-50 overflow-y-auto">
      {typeof setIsNavbarOpen !== "undefined" && (
        <CloseButton
          clickHandler={() => {
            setIsNavbarOpen(false);
          }}
        />
      )}
      <ul className="flex flex-col space-y-6 mt-6">
        <SidebarElements
          directTo="/"
          elementName="Dashboard Home"
          svg={dashboardHome}
        />
        <SidebarElements
          directTo="/role-assignment"
          elementName="Manage Role Assignment"
          svg={manageRoleAssignment}
        />
        <SidebarElements
          directTo="/manage-project-user"
          elementName="Manage Project Users"
          svg={manageProjectUsers}
        />
        <SidebarElements
          directTo="/my-projects"
          elementName="My Projects"
          svg={myProjects}
        />
        <SidebarElements
          directTo="/my-tickets"
          elementName="My Tickets"
          svg={myTickets}
        />
        <SidebarElements
          directTo="/all-projects"
          elementName="All Projects"
          svg={allProjects}
        />
        <SidebarElements
          directTo="/all-tickets"
          elementName="All Tickets"
          svg={allTickets}
        />
        <SidebarElements
          directTo="/my-profile"
          elementName="Profile"
          svg={profile}
        />
        <SidebarElements
          directTo="no-direction"
          elementName="Logout"
          svg={logout}
          clickHandler={firebaseLogout}
        />
      </ul>
    </div>
  );
};
export default NavbarSmallScreen;
