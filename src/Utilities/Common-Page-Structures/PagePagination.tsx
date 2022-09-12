import ReactPaginate from "react-paginate";
import { PageTableBodyForProjectsProps } from "./PageTableBodyForProjects";

const PagePagination = (props: PageTableBodyForProjectsProps) => {
  let pageCount: number = 0;
  if (props.projectData) {
    pageCount = Math.ceil(props?.projectData?.length / props.ITEM_PER_PAGE);
  }

  return (
    <ReactPaginate
      previousLabel={"<"}
      nextLabel={">"}
      pageCount={pageCount}
      onPageChange={(selectedItem: { selected: number }) =>
        props.setPageNumber(selectedItem.selected)
      }
      containerClassName={"paginationBttns"}
      previousLinkClassName={"previousBttn"}
      nextLinkClassName={"nextBttn"}
      disabledClassName={"paginationDisabled"}
      activeClassName={"paginationActive"}
    />
  );
};
export default PagePagination;
