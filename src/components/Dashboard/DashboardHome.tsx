//components
import TicketByPriority from "./TicketByPriority";
import TicketByStatus from "./TicketByStatus";
import TicketByType from "./TicketByType";
import TicketByProject from "./TicketByProject";

import { useGetDocsArrayQuery } from "../../customHooks/useGetDocsArrayQuery";
import { useAuth } from "../../firebase/firebaseConfig";
import { ITicketsRoot } from "../../Interfaces/Firebase-Interfaces/TicketsInterface";

const DashboardHome = () => {
  const currentUser = useAuth();

  //GET EVERY TICKET BELONGS TO CURRENT USER
  const { dbData } = useGetDocsArrayQuery<ITicketsRoot>(
    "tickets",
    "userEmails",
    "array-contains",
    currentUser?.email || "undefined"
  );

  return (
    <div className="w-full lg:w-[calc(100%_-_16rem)] ml-auto">
      <h1 className="text-center text-4xl font-black my-4 text-fbFillColor">
        Dashboard
      </h1>
      <div className="grid grid-cols-1 lg:grid-cols-2 mb-6">
        {dbData && <TicketByPriority dbData={dbData} />}
        {dbData && <TicketByType dbData={dbData} />}
        {dbData && <TicketByStatus dbData={dbData} />}
        {dbData && <TicketByProject dbData={dbData} />}
      </div>
    </div>
  );
};
export default DashboardHome;
