import PageTable from "../../../Utilities/Common-Page-Structures/PageTable";
import { useState } from "react";
import PagePagination from "../../../Utilities/Common-Page-Structures/PagePagination";
import { useGetDocs } from "../../../customHooks/useGetDocs";
import { IFirebaseUser } from "../../../Interfaces/Firebase-Interfaces/UserInterface";

interface AssignedUsersForSingleProjectProps {
  projectID: string;
}

const AssignedUsersForSingleProject = (
  props: AssignedUsersForSingleProjectProps
) => {
  const [pageNumber, setPageNumber] = useState(0);

  //GET ALL THE ASSIGNED USERS FOR SELECTED PROJECTS
  const { dbData } = useGetDocs<IFirebaseUser>(
    `projects/${props.projectID}/users`
  );

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
    </div>
  );
};
export default AssignedUsersForSingleProject;
