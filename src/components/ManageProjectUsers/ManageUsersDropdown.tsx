import { IProject } from "../../Interfaces/Firebase-Interfaces/ProjectInterface";

interface ManageProjectUsersProps {
  dbData: IProject[] | null;
}

const ManageUsersDropdown = ({ dbData }: ManageProjectUsersProps) => {
  return (
    <>
      <h2 className="font-bold">Select Project</h2>
      <select className="border w-44 h-10">
        <option defaultChecked defaultValue={"Please Select"}>
          Please Select
        </option>
        {dbData &&
          dbData.map((project) => (
            <option key={project.id} value={project.id}>
              {project.projectName}
            </option>
          ))}
      </select>
    </>
  );
};
export default ManageUsersDropdown;
