import { IProject } from "../../Interfaces/Firebase-Interfaces/ProjectInterface";

interface ManageProjectUsersProps {
  dbData: IProject[] | null;
  setSelectedProjectID: React.Dispatch<React.SetStateAction<string>>;
}

const ManageUsersDropdown = ({
  dbData,
  setSelectedProjectID,
}: ManageProjectUsersProps) => {
  //*when user select a project from dropdown, store project id and projectname
  const dropDownHandleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    let obj: IProject = JSON.parse(e.target.value);
    if (obj.id) {
      setSelectedProjectID(obj.id); //get project id
    }
  };

  return (
    <>
      <h2 className="font-bold">Select Project</h2>
      <select onChange={dropDownHandleChange} className="border w-44 h-10">
        <option defaultChecked defaultValue={"Please Select"}>
          Please Select
        </option>
        {dbData &&
          dbData.map((project) => (
            <option key={project.id} value={JSON.stringify(project)}>
              {project.projectName}
            </option>
          ))}
      </select>
    </>
  );
};
export default ManageUsersDropdown;
