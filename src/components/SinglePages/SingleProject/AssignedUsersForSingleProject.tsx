//react
import { useState } from "react";

//firebase
import { useGetDocs } from "../../../customHooks/useGetDocs";

//components
import PageTable from "../../../Utilities/Common-Page-Structures/PageTable";
import PagePagination from "../../../Utilities/Common-Page-Structures/PagePagination";

//interfaces
import { IFirebaseUser } from "../../../Interfaces/Firebase-Interfaces/UserInterface";
import PageSearch from "../../../Utilities/Common-Page-Structures/PageSearch";

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
    <div className="w-full lg:w-5/12 text-center overflow-auto lg:ml-6">
      <header>
        <h1 className="text-3xl text-black mb-10 font-bold">Assigned Users</h1>
      </header>

      <PageSearch
        searchInputPlaceHolder="Search User"
        searchInputChangeHandler={() => console.log("hey")}
      />

      <PageTable
        ITEM_PER_PAGE={5}
        pageNumber={pageNumber}
        setPageNumber={setPageNumber}
        data={dbData}
        firstTableHeader="User"
        pageType="user"
        userDataForTable={dbData}
        secondTableHeader="Email"
        thirdTableHeader="Role"
        searchTerm=""
      />
    </div>
  );
};
export default AssignedUsersForSingleProject;
