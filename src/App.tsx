//*react
import { useState } from "react";

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
    </div>
  );
}

export default App;
