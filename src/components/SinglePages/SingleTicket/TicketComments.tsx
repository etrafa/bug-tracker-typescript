//components
import { useGetDocsArrayQuery } from "../../../customHooks/useGetDocsArrayQuery";
import { IComment } from "../../../Interfaces/Firebase-Interfaces/CommentInterface";
import AddComments from "./AddComments";
import ShowComments from "./ShowComments";

interface TicketCommentsProps {
  ticketID: string;
  setIsAddCommentModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
  setCurrentTicketID: React.Dispatch<React.SetStateAction<string>>;
}

const TicketComments = (props: TicketCommentsProps) => {
  //*GET TICKET COMMENTS
  const { dbData: ticketCommentsData } = useGetDocsArrayQuery<IComment>(
    "comments",
    "belongedTicketID",
    "==",
    props.ticketID
  );

  return (
    <div className="w-full lg:w-6/12 max-w-2xl text-center overflow-auto mt-12 mx-auto lg:border-l-2">
      <h2 className="text-center font-bold text-lg">Comments</h2>
      <AddComments
        setIsAddCommentModalOpen={props.setIsAddCommentModalOpen}
        ticketID={props.ticketID}
        setCurrentTicketID={props.setCurrentTicketID}
      />
      {ticketCommentsData && ticketCommentsData.length >= 1 ? (
        <ShowComments ticketCommentsData={ticketCommentsData} />
      ) : (
        <p className="mt-24 font-bold">No comments yet.</p>
      )}
    </div>
  );
};
export default TicketComments;
