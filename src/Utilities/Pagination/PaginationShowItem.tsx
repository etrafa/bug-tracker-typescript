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

  const changePage = (selected: any) => {
    setPageNumber(selected);
  };

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
        onPageChange={changePage}
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
