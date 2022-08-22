//react
import { FC, useState } from "react";
import { useAuth } from "../../firebase/firebaseConfig";

//interface
import { INavProps } from "../../Interfaces/NavbarInterface";

//components
import NavbarLargeScreen from "./NavbarLargeScreen";
import NavbarSmallScreen from "./NavbarSmallScreen";

const Navbar: FC<INavProps> = ({
  setIsProjectModalOpen,
  setIsTicketModalOpen,
}) => {
  //* toggle navbar (for small screen only)
  const [isNavbarOpen, setIsNavbarOpen] = useState<boolean>(false);

  return (
    <nav className="bg-gray-50 w-full lg:w-[calc(100%_-_16rem)] h-[calc(5rem_-_7px)] ml-auto relative">
      <div className="flex justify-between p-5 text-black lg:hidden">
        <svg
          onClick={() => setIsNavbarOpen(true)}
          xmlns="http://www.w3.org/2000/svg"
          className="h-8 w-8 cursor-pointer"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M4 6h16M4 12h16M4 18h16"
          />
        </svg>
      </div>
      {/* NAVBAR MENU FOR SMALL SCREEN */}
      {isNavbarOpen && (
        <NavbarSmallScreen
          setIsNavbarOpen={setIsNavbarOpen}
          setIsProjectModalOpen={setIsProjectModalOpen}
          setIsTicketModalOpen={setIsTicketModalOpen}
        />
      )}

      {/* NAVBAR FOR LARGE SCREEN */}
      <NavbarLargeScreen
        setIsProjectModalOpen={setIsProjectModalOpen}
        setIsTicketModalOpen={setIsTicketModalOpen}
      />
    </nav>
  );
};
export default Navbar;
