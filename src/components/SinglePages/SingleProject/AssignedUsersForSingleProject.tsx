import PageTable from "../../../Utilities/Common-Page-Structures/PageTable";
import { useState } from "react";
import PagePagination from "../../../Utilities/Common-Page-Structures/PagePagination";

const AssignedUsersForSingleProject = () => {
  const [pageNumber, setPageNumber] = useState(0);
  return (
    <div className="w-full lg:w-4/12 text-center overflow-auto lg:ml-6">
      <PageTable
        ITEM_PER_PAGE={5}
        pageNumber={0}
        searchTerm="a"
        firstTableHeader="User"
        data={[]}
        setPageNumber={setPageNumber}
        pageType="t"
        secondTableHeader="Role"
        thirdTableHeader=""
      />
      <PagePagination
        ITEM_PER_PAGE={5}
        pageNumber={pageNumber}
        setPageNumber={setPageNumber}
        searchTerm="a"
      />
      {/* <header className="lg:mx-auto">
        <h1 className="text-4xl text-black font-bold pt-4">Assigned User</h1>
        <h4 className="text-black py-4">Current Users on this Project</h4>
      </header>
      <div className="relative mt-1 lg:mt-6">
        <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
          <svg
            className="w-5 h-5 text-gray-500 dark:text-gray-400"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
              clipRule="evenodd"
            ></path>
          </svg>
        </div>
        <input
          type="text"
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-11/12 max-w-xs pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          //   onChange={(e) => setSearchTerm(e.target.value)}
          placeholder="Search User"
        />
      </div>
      <table className="w-full lg:mx-auto text-sm text-left text-gray-500 dark:text-gray-400 mt-12">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
          <tr>
            <th className="px-6 py-3">User Name</th>
            <th className="px-6 py-3">Role</th>
          </tr>
        </thead>
        {/* {showUsers} */}
      {/* </table>  */}
      {/* <ReactPaginate
        previousLabel={"<"}
        nextLabel={">"}
        pageCount={pageCount}
        onPageChange={changePage}
        containerClassName={"paginationBttns"}
        previousLinkClassName={"previousBttn"}
        nextLinkClassName={"nextBttn"}
        disabledClassName={"paginationDisabled"}
        activeClassName={"paginationActive"}
      /> */}
    </div>
  );
};
export default AssignedUsersForSingleProject;
