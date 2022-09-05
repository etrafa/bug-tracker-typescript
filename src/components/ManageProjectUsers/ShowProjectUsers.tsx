//firebase
import { removeUser } from "../../firebase/FirebaseUserFunctions/firebaseRemoveUser";
import { useGetDocs } from "../../customHooks/useGetDocs";

//interfaces
import { IFirebaseUser } from "../../Interfaces/Firebase-Interfaces/UserInterface";

//component
import TablePagination from "../../Utilities/Pagination/TablePagination";

interface ShowProjectUsersProps {
  selectedProjectID: string;
  selectedUserID: string;
  setSelectedUserID: React.Dispatch<React.SetStateAction<string>>;
}

const ShowProjectUsers = ({
  selectedProjectID,
  setSelectedUserID,
  selectedUserID,
}: ShowProjectUsersProps) => {
  const { dbData: singleProject } = useGetDocs(
    `projects/${selectedProjectID}/users`
  );

  //* this function will remove a user from selected project.
  const handleRemoveUser = (
    e: React.MouseEvent<HTMLButtonElement>,
    user: IFirebaseUser
  ) => {
    if (user.id) {
      removeUser(`projects/${selectedProjectID}/`, "users", user);
    }
  };

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
          removeUser={handleRemoveUser}
        />
      )}
    </div>
  );
};
export default ShowProjectUsers;
