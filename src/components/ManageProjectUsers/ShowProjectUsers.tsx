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
      {/* //*IF THERE IS NO USER SHOW THIS MESSAGE */}
      {singleProject?.length === 0 && (
        <p className="text-center py-6 font-bold">No user found</p>
      )}
      {/* //*IF THERE IS AN ERROR SHOW NULL  */}
      {singleProject?.length === null && null}

      {/* //*IF THERE IS USER SHOW PAGINATION AND USER */}

      {singleProject && singleProject?.length > 0 && (
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
