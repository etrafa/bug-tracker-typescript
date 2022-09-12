//react
import { useParams } from "react-router-dom";

const SingleTicket = () => {
  const { ticketID } = useParams();

  console.log(ticketID);

  return <div></div>;
};
export default SingleTicket;
