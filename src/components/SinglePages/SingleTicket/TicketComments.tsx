//components
import { useGetDocs } from "../../../customHooks/useGetDocs";
import { useGetDocsArrayQuery } from "../../../customHooks/useGetDocsArrayQuery";
import { useGetDocsWithQuery } from "../../../customHooks/useGetDocsWithQuery";
import { IComment } from "../../../Interfaces/Firebase-Interfaces/CommentInterface";
import AddComments from "./AddComments";
import ShowComments from "./ShowComments";

interface TicketCommentsProps {
  ticketID: string;
}

const TicketComments = (props: TicketCommentsProps) => {
  //*GET TICKET COMMENTS
  //   const { dbData: ticketCommentsData } = useGetDocsArrayQuery<IComment>(
  //     "comments",
  //     "belongedTicketID",
  //     props.ticketID || "undefined"
  //   );

  const { dbData } = useGetDocs<IComment>(`projects/${props.ticketID}/users`);

  console.log(props.ticketID, dbData);

  return (
    <div className="w-full lg:w-6/12 max-w-2xl text-center overflow-auto mt-12 mx-auto lg:border-l-2">
      <h2 className="text-center font-bold text-lg">Comments</h2>
      {/* {ticketCommentsData && <ShowComments {...ticketCommentsData} />} */}
      {/* <AddComments /> */}
    </div>
  );
};
export default TicketComments;
