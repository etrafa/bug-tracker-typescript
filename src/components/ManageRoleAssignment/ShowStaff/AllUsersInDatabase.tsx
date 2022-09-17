//react
import { useState } from "react";

//interfaces
import { IFirebaseUser } from "../../../Interfaces/Firebase-Interfaces/UserInterface";

//paginate
import ReactPaginate from "react-paginate";

interface AllUsersInDatabaseProps {
  dbData: IFirebaseUser[];
}

const AllUsersInDatabase = ({ dbData }: AllUsersInDatabaseProps) => {
  const [pageNumber, setPageNumber] = useState(0);
  const USERS_PER_PAGE = 5;
  const pagesVisited = pageNumber * USERS_PER_PAGE;
  const pageCount = Math.ceil(dbData?.length / USERS_PER_PAGE);

  const [searchTerm, setSearchTerm] = useState("");
  const showUsers = dbData
    ?.filter((val: IFirebaseUser) => {
      if (searchTerm === "") {
        return val;
      } else if (
        val?.fullName?.toLowerCase().includes(searchTerm.toLowerCase())
      ) {
        return val;
      }
    })
    .slice(pagesVisited, pagesVisited + USERS_PER_PAGE)
    .map((user) => {
      return (
        <tbody key={user?.id}>
          <tr className="bg-white border-b hover:bg-gray-50">
            <th className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
              {user?.fullName}
            </th>
            <td className="px-6 py-4">{user?.email}</td>
            <td className="px-6 py-4">{user?.role}</td>
          </tr>
        </tbody>
      );
    });

  return (
    <div className="relative overflow-x-auto shadow-md sm:rounded-lg mt-8 lg:w-8/12">
      <h4 className="text-2xl mt-16 ml-5">Users in your database</h4>
      <div className="p-4">
        <label>Search</label>
        <div className="relative mt-1">
          <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
            <svg
              className="w-5 h-5 text-gray-500"
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
            onChange={(e) => setSearchTerm(e.target.value)}
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-80 pl-10 p-2.5"
            placeholder="Search User"
          />
        </div>
      </div>
      <table className="w-full text-sm text-left text-gray-500">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50">
          <tr>
            <th scope="col" className="px-6 py-3">
              User Name
            </th>
            <th scope="col" className="px-6 py-3">
              Email
            </th>
            <th scope="col" className="px-6 py-3">
              Role
            </th>
          </tr>
        </thead>
        {showUsers}
      </table>
      <ReactPaginate
        previousLabel={"<"}
        nextLabel={">"}
        pageCount={pageCount}
        onPageChange={(selectedItem: { selected: number }) =>
          setPageNumber(selectedItem.selected)
        }
        containerClassName={"paginationBttns"}
        previousLinkClassName={"previousBttn"}
        nextLinkClassName={"nextBttn"}
        disabledClassName={"paginationDisabled"}
        activeClassName={"paginationActive"}
      />
    </div>
  );
};
export default AllUsersInDatabase;
