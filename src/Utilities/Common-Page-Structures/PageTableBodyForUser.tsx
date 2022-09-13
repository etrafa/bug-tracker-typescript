import { IFirebaseUser } from "../../Interfaces/Firebase-Interfaces/UserInterface";

export interface PageTableBodyForUserProps {
  userDataForTable?: IFirebaseUser[] | null;
  pageNumber: number;
  searchTerm: string;
  setPageNumber: React.Dispatch<React.SetStateAction<number>>;
  ITEM_PER_PAGE: number;
}

const PageTableBodyForUser = (props: PageTableBodyForUserProps) => {
  const pagesVisited = props.pageNumber * props.ITEM_PER_PAGE;

  const showUsers = props?.userDataForTable
    ?.filter((val) => {
      if (props.searchTerm === "") return val;
      else if (
        val.fullName?.toLowerCase().includes(props.searchTerm.toLowerCase())
      )
        return val;
    })
    .slice(pagesVisited, pagesVisited + props.ITEM_PER_PAGE)
    .map((user) => {
      return (
        <tr
          key={user.id}
          className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600"
        >
          <th
            scope="row"
            className="px-6 py-4 font-medium text-gray-900 dark:text-white whitespace-nowrap"
          >
            {user.fullName}
          </th>
          <td className="px-6 py-4">{user.email}</td>
          <td className="px-6 py-4">{user.role}</td>
        </tr>
      );
    });

  return <tbody>{showUsers}</tbody>;
};
export default PageTableBodyForUser;
