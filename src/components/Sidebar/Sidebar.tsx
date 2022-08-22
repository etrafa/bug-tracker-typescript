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
} from "./SidebarIcons";

const Sidebar = () => {
  return (
    <aside
      className="w-64 min-h-screen bg-gray-50 fixed top-0 left-0 hidden lg:block"
      aria-label="Sidebar"
    >
      <div className="overflow-y-auto py-4 px-3 rounded ">
        <h1 className="text-center">
          Welcome, <br />
          {/* <span className="font-bold">{currentUser?.displayName}</span> */}
          {/* <span className="font-bold block">Role:{dbData?.role}</span> */}
          <span className="font-bold">Kayhan Senel</span>
          <span className="font-bold block">Admin</span>
        </h1>
        <hr className="mt-2" />
        <ul className="space-y-2 mt-10">
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
        </ul>
      </div>
    </aside>
  );
};
export default Sidebar;
