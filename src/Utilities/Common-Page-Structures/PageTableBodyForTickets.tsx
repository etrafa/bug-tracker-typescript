import { Link } from "react-router-dom";
import { ITicketsRoot } from "../../Interfaces/Firebase-Interfaces/TicketsInterface";

export interface PageTableBodyForTicketsProps {
  ticketData?: ITicketsRoot[] | null;
  pageNumber: number;
  searchTerm: string;
  setPageNumber: React.Dispatch<React.SetStateAction<number>>;
  ITEM_PER_PAGE: number;
}

const PageTableBodyForTickets = (props: PageTableBodyForTicketsProps) => {
  const pagesVisited = props.pageNumber * props.ITEM_PER_PAGE;

  const currentUrl = window.location.href; // get current url from the browser.

  const showTickets = props?.ticketData
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
        <tr key={ticket.id} className="bg-white border-b hover:bg-gray-50 ">
          <th
            scope="row"
            className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap"
          >
            {ticket.ticketDescription}
          </th>

          {/* IF CURRENT URL INCLUDES PROJECT SHOW PROJECT STATUS
          ELSE SHOW PROJECT NAME */}
          {currentUrl.includes("projects") ? (
            <td className="px-6 py-4">{ticket.ticketStatus}</td>
          ) : (
            <td className="px-6 py-4">{ticket.projectName}</td>
          )}
          <td className="px-6 py-4">{ticket.ticketOwner}</td>
          <td className="px-6 py-4">{ticket.submitTime}</td>
          <Link to={`/tickets/${ticket.id}`}>
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
