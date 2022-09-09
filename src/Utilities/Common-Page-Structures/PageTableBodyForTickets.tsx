import { Link } from "react-router-dom";
import { ITicketsRoot } from "../../Interfaces/Firebase-Interfaces/TicketsInterface";

export interface PageTableBodyForTicketsProps {
  data: ITicketsRoot[] | null;
  pageNumber: number;
  searchTerm: string;
  setPageNumber: React.Dispatch<React.SetStateAction<number>>;
  ITEM_PER_PAGE: number;
}

const PageTableBodyForTickets = (props: PageTableBodyForTicketsProps) => {
  const pagesVisited = props.pageNumber * props.ITEM_PER_PAGE;

  const showTickets = props?.data
    ?.filter((val) => {
      if (props.searchTerm === "") return val;
      else if (
        val.ticketDescription
          ?.toLowerCase()
          .includes(props.searchTerm.toLowerCase())
      )
        return val;
    })
    .slice(pagesVisited, pagesVisited + props.ITEM_PER_PAGE)
    .map((ticket) => {
      return (
        <tr
          key={ticket.id}
          className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600"
        >
          <th
            scope="row"
            className="px-6 py-4 font-medium text-gray-900 dark:text-white whitespace-nowrap"
          >
            {ticket.ticketDescription}
          </th>
          <td className="px-6 py-4">{ticket.projectName}</td>
          <td className="px-6 py-4">{ticket.ticketOwner}</td>
          <td className="px-6 py-4">{ticket.submitTime}</td>
          <Link to={`/my-tickets/${ticket.id}`}>
            <td className="px-6 py-4 text-fbFillColor cursor-pointer underline hover:text-blue-700">
              More details
            </td>
          </Link>
        </tr>
      );
    });

  return <tbody>{showTickets}</tbody>;
};
export default PageTableBodyForTickets;
