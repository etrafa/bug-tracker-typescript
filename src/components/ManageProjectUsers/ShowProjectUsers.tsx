import { useGetDocs } from "../../customHooks/useGetDocs";
import TablePagination from "../../Utilities/Pagination/TablePagination";

interface ShowProjectUsersProps {
  selectedProjectID: string;
}

const ShowProjectUsers = ({ selectedProjectID }: ShowProjectUsersProps) => {
  const { dbData: singleProject } = useGetDocs(
    `projects/${selectedProjectID}/users`
  );

  return (
    <div>
      {singleProject?.length === 0 ? (
        <p className="text-center py-6 font-bold">No user found</p>
      ) : (
        <TablePagination
          firstThLabel="User Name"
          secondThLabel="Role"
          thirdThLabel=""
          ITEMS_PER_PAGE={5}
          data={singleProject}
        />
      )}
    </div>
  );
};
export default ShowProjectUsers;
