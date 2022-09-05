import { IFirebaseUser } from "../../Interfaces/Firebase-Interfaces/UserInterface";
import PaginationShowItem from "./PaginationShowItem";

interface TablePaginationProps {
  firstThLabel: string;
  secondThLabel: string;
  thirdThLabel: string;
  ITEMS_PER_PAGE: number;
  data: IFirebaseUser[] | null;
  removeUser: (
    e: React.MouseEvent<HTMLButtonElement>,
    user: IFirebaseUser
  ) => void;
}

const TablePagination = (props: TablePaginationProps) => {
  return (
    <table className="w-full lg:mx-auto text-sm text-left text-gray-500 mt-6">
      <thead className="text-xs text-gray-700 uppercase bg-gray-50">
        <tr>
          <th className="px-6 py-3">{props.firstThLabel}</th>
          <th className="px-6 py-3">{props.secondThLabel}</th>
          <th className="px-6 py-3">{props.thirdThLabel}</th>
        </tr>
      </thead>
      <PaginationShowItem
        ITEMS_PER_PAGE={props.ITEMS_PER_PAGE}
        data={props.data}
        removeUser={props.removeUser}
      />
    </table>
  );
};
export default TablePagination;
