//react
import { useNavigate, useParams } from "react-router-dom";
import { useGetDocsWithQuery } from "../../../customHooks/useGetDocsWithQuery";
import { IComment } from "../../../Interfaces/Firebase-Interfaces/CommentInterface";
import { ITicketsRoot } from "../../../Interfaces/Firebase-Interfaces/TicketsInterface";
import LoadSpinner from "../../../Utilities/LoadSpinner";
import SingleTicketInformation from "./SingleTicketInformation";

const SingleTicket = () => {
  const { ticketID } = useParams(); //get the ticket id
  const navigate = useNavigate();

  //*GET SINGLE TICKET INFORMATION
  const { singleData: singleTicket, loading } =
    useGetDocsWithQuery<ITicketsRoot>("tickets", "id", ticketID || "undefined");

  //*GET TICKET COMMENTS
  const { singleData: ticketCommentsData } = useGetDocsWithQuery<IComment>(
    "comments",
    "belongedTicketID",
    ticketID || "undefined"
  );

  console.log(ticketCommentsData);

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
                // setIsEditTicketModalOpen(true);
                // setTicketID(ticketId || "undefined");
              }}
              className="text-base underline text-center py-4 cursor-pointer hover:text-gray-300"
            >
              Edit Ticket
            </p>
          </div>
        </div>
        <div className="flex mx-auto gap-4 flex-col lg:flex-row my-12">
          {loading && <LoadSpinner />}
          {/* //*display ticket details * */}
          {/* <SingleTicketInformation {...singleTicket} /> */}
          {/* //*display ticket comments  */}
          {/* {ticketCommentsData && <TicketComments {...ticketCommentsData} />} */}
        </div>
      </div>
    </div>
  );
};
export default SingleTicket;
