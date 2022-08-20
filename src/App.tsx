//*react
import { useState } from "react";
import DashboardHome from "./components/Dashboard/DashboardHome";

//*components
// import Login from "./components/Login/Login";
import Navbar from "./components/Navbar/Navbar";

function App() {
  //*toggle project modal
  const [isProjectModalOpen, setIsProjectModalOpen] = useState<boolean>(false);

  //* toggle ticket modal
  const [isTicketModalOpen, setIsTicketModalOpen] = useState<boolean>(false);

  return (
    <div>
      {/* <Login /> */}
      <Navbar
        setIsProjectModalOpen={setIsProjectModalOpen}
        setIsTicketModalOpen={setIsTicketModalOpen}
      />
      <DashboardHome />
    </div>
  );
}

export default App;
