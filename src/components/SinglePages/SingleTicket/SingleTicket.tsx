import { Link, useParams } from "react-router-dom";
import { useGetDocsWithQuery } from "../../../customHooks/useGetDocsWithQuery";
import SingleTicketInformations from "./SingleTicketInformations";
import TicketComments from "./TicketComments";

const SingleTicket = () => {
  const { ticketId } = useParams(); //get the ticket id

  const { singleData: singleTicket, loading } = useGetDocsWithQuery(
    "tickets",
    "id",
    "RiXQYCV2F7m62mzRl1X8"
  );

  return (
    <div className="w-full lg:w-[calc(100%_-_16rem)] ml-auto mb-6">
      <div className="w-11/12 mx-auto mt-24 relative border border-black lg:min-h-[20rem]">
        <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 w-11/12  bg-fbFillColor text-center text-white text-2xl font-bold pt-3">
          <h1>Ticket Details</h1>
          <div className="flex justify-evenly lg:mx-32">
            <Link to="/my-tickets">
              <p className="text-base underline text-center py-4 cursor-pointer hover:text-gray-300">
                Go ticket list
              </p>
            </Link>
            <p
              // onClick={() => {
              //   setEditTicketOpen(true);
              //   setCurrentTicketID(ticketId);
              // }}
              className="text-base underline text-center py-4 cursor-pointer hover:text-gray-300"
            >
              Edit Ticket
            </p>
          </div>
        </div>
        <div className="flex mx-auto gap-4 flex-col lg:flex-row my-12">
          <SingleTicketInformations />
          <TicketComments />
        </div>
      </div>
    </div>
  );
};
export default SingleTicket;
