//react
import { useNavigate, useParams } from "react-router-dom";

//firebase
import { useGetDocsWithQuery } from "../../../customHooks/useGetDocsWithQuery";

//components
import LoadSpinner from "../../../Utilities/LoadSpinner";
import SingleTicketInformation from "./SingleTicketInformation";

//interfaces
import { ITicketsRoot } from "../../../Interfaces/Firebase-Interfaces/TicketsInterface";
import TicketComments from "./TicketComments";

interface SingleTicketProps {
  setIsEditTicketModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
  setCurrentTicketID: React.Dispatch<React.SetStateAction<string>>;
}

const SingleTicket = ({
  setCurrentTicketID,
  setIsEditTicketModalOpen,
}: SingleTicketProps) => {
  const { ticketID } = useParams(); //get the ticket id
  const navigate = useNavigate();

  //*GET SINGLE TICKET INFORMATION
  const { singleData: singleTicket, loading } =
    useGetDocsWithQuery<ITicketsRoot>("tickets", "id", ticketID || "undefined");

  return (
    <div className="w-full lg:w-[calc(100%_-_16rem)] ml-auto mb-6">
      <div className="w-11/12 mx-auto mt-24 relative border border-black lg:min-h-[20rem]">
        <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 w-11/12  bg-fbFillColor text-center text-white text-2xl font-bold pt-3">
          <h1>Ticket Details</h1>
          <div className="flex justify-evenly lg:mx-32">
            <p
              onClick={() => navigate(-1)}
              className="text-base underline text-center py-4 cursor-pointer hover:text-gray-300"
            >
              Go ticket list
            </p>

            <p
              onClick={() => {
                setIsEditTicketModalOpen(true);
                setCurrentTicketID(ticketID || "undefined");
              }}
              className="text-base underline text-center py-4 cursor-pointer hover:text-gray-300"
            >
              Edit Ticket
            </p>
          </div>
        </div>
        {loading && <LoadSpinner />}

        <div className="flex mx-auto gap-4 flex-col lg:flex-row my-12">
          {/* //*display ticket details * */}
          {singleTicket && <SingleTicketInformation {...singleTicket} />}
          {/* //*display ticket comments  */}
          {ticketID && <TicketComments ticketID={ticketID} />}
        </div>
      </div>
    </div>
  );
};
export default SingleTicket;
