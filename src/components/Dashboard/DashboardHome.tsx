//components
import TicketByPriority from "./TicketByPriority";
import TicketByStatus from "./TicketByStatus";
import TicketByType from "./TicketByType";
import TicketByProject from "./TicketByProject";

import { useGetDocsArrayQuery } from "../../customHooks/useGetDocsArrayQuery";

const DashboardHome = () => {
  const { dbData } = useGetDocsArrayQuery(
    "tickets",
    "userEmails",
    "testdeveloper@gmail.com"
  );

  return (
    <div className="w-full lg:w-[calc(100%_-_16rem)] ml-auto">
      <h1 className="text-center text-4xl font-black my-4 text-fbFillColor">
        Dashboard
      </h1>
      <div className="grid grid-cols-1 lg:grid-cols-2 mb-6">
        <TicketByPriority dbData={dbData} />
        <TicketByType dbData={dbData} />
        <TicketByStatus dbData={dbData} />
        <TicketByProject dbData={dbData} />
      </div>
    </div>
  );
};
export default DashboardHome;
