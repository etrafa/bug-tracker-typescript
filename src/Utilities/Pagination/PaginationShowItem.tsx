// };

import { useState } from "react";
import ReactPaginate from "react-paginate";

import { IFirebaseUser } from "../../Interfaces/Firebase-Interfaces/UserInterface";

interface PaginationShowItemProps {
  ITEMS_PER_PAGE: number;
  data: IFirebaseUser[] | null;
}
let PAGE_COUNT: number;

const PaginationShowItem = (props: PaginationShowItemProps) => {
  const [pageNumber, setPageNumber] = useState(0);
  const ITEMS_PER_PAGE = props.ITEMS_PER_PAGE;
  const PAGES_VISITED = pageNumber * ITEMS_PER_PAGE;
  if (props.data) {
    PAGE_COUNT = Math.ceil(props.data.length / ITEMS_PER_PAGE);
  }

  let showItems;

  if (props.data) {
    showItems = props.data
      .slice(PAGES_VISITED, PAGES_VISITED + ITEMS_PER_PAGE)
      .map((item) => {
        return (
          <>
            <tbody key={item.id}>
              <tr className="bg-white border-b hover:bg-gray-50">
                <th className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
                  {item?.fullName}
                </th>
                <td className="px-6 py-4">{item?.role}</td>
                <td className="px-6 py-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 hover:stroke-gray-400 cursor-pointer"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                    />
                  </svg>
                </td>
              </tr>
            </tbody>
          </>
        );
      });
  }

  return (
    <>
      {showItems}
      <ReactPaginate
        previousLabel={"<"}
        nextLabel={">"}
        pageCount={PAGE_COUNT}
        onPageChange={(selectedItem: { selected: number }) =>
          setPageNumber(selectedItem.selected)
        }
        containerClassName={"paginationBttns"}
        previousLinkClassName={"previousBttn"}
        nextLinkClassName={"nextBttn"}
        disabledClassName={"paginationDisabled"}
        activeClassName={"paginationActive"}
      />
    </>
  );
};
export default PaginationShowItem;
