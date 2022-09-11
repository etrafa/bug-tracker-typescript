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

enum USER_TYPES {
  admin = "admin",
  user = "user",
}

const NavbarSmallScreen: FC<INavProps> = ({
  setIsNavbarOpen,
  setIsTicketModalOpen,
  setIsProjectModalOpen,
}) => {
  const currentUser = useAuth();

  const { dbData } = useGetSingleDoc("users", currentUser?.uid); //get current user

  return (
    <nav className="w-full lg:hidden min-h-screen bg-gray-200 fixed top-0 bottom-0 z-50 overflow-y-auto">
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
        {dbData?.role === USER_TYPES.admin && (
          <SidebarElements
            directTo="/role-assignment"
            elementName="Manage Role Assignment"
            svg={manageRoleAssignment}
          />
        )}
        {dbData?.role === USER_TYPES.admin && (
          <SidebarElements
            directTo="/manage-project-user"
            elementName="Manage Project Users"
            svg={manageProjectUsers}
          />
        )}
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
        {dbData?.role === USER_TYPES.admin && (
          <SidebarElements
            directTo="/all-projects"
            elementName="All Projects"
            svg={allProjects}
          />
        )}
        {dbData?.role === USER_TYPES.admin && (
          <SidebarElements
            directTo="/all-tickets"
            elementName="All Tickets"
            svg={allTickets}
          />
        )}
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
      <div className="flex flex-col gap-y-6 mt-6 items-center">
        <button
          onClick={() => {
            if (setIsNavbarOpen) setIsNavbarOpen(false); //close navbar first and open ticket modal
            setIsTicketModalOpen(true);
          }}
          className="bg-fbFillColor hover:bg-blue-400 w-64 lg:mx-6 h-12 rounded-md text-white font-bold"
        >
          CREATE NEW TICKET
        </button>

        {dbData?.role === USER_TYPES.admin && (
          <button
            onClick={() => {
              if (setIsNavbarOpen) setIsNavbarOpen(false); //close navbar first and open project modal
              setIsProjectModalOpen(true);
            }}
            className="bg-white hover:bg-slate-100 w-64 lg:mx-6 h-12 rounded-md text-black font-bold border"
          >
            CREATE NEW PROJECT
          </button>
        )}
      </div>
    </nav>
  );
};
export default NavbarSmallScreen;
