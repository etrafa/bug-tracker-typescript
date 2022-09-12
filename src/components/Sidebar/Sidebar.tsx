//components
import SidebarElements from "../../Utilities/SidebarElements/SidebarElements";

//icons
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
} from "./SidebarIcons";

//logout function
import { firebaseLogout } from "../../firebase/FirebaseAuthFunctions/firebaseLogout";
import { useGetSingleDoc } from "../../customHooks/useGetSingleDoc";
import { useAuth } from "../../firebase/firebaseConfig";
import { IFirebaseUser } from "../../Interfaces/Firebase-Interfaces/UserInterface";

const Sidebar = () => {
  const currentUser = useAuth();
  const { dbData } = useGetSingleDoc<IFirebaseUser>("users", currentUser?.uid); //get current user

  enum USER_TYPES {
    admin = "admin",
    user = "user",
  }

  return (
    <aside
      className="w-64 min-h-screen bg-gray-50 fixed top-0 left-0 hidden lg:block"
      aria-label="Sidebar"
    >
      <div className="overflow-y-auto py-4 px-3 rounded ">
        <h1 className="text-center">
          Welcome, <br />
          <span className="font-bold">{dbData?.fullName}</span>
          <span className="font-bold block">Role:{dbData?.role}</span>
        </h1>
        <hr className="mt-2" />
        <ul className="space-y-2 mt-10">
          {/* //* SHOW SOME ELEMENTS ONLY ROLE OF ADMIN */}
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
            directTo="/no-direction"
            elementName="Logout"
            svg={logout}
            clickHandler={firebaseLogout}
          />
        </ul>
      </div>
    </aside>
  );
};
export default Sidebar;
