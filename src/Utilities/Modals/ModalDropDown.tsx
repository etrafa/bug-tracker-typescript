import { IProject } from "../../Interfaces/Firebase-Interfaces/ProjectInterface";

interface ModalDropDownProps {
  dropDownLabel: string;
  dropDownName: string;
  dropDownChangeHandler: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  dropdownData: IProject[];
}

const ModalDropDown = ({
  dropDownLabel,
  dropDownName,
  dropdownData,
  dropDownChangeHandler,
}: ModalDropDownProps) => {
  return (
    <div>
      <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">
        {dropDownLabel}
      </label>
      <select
        name={dropDownName}
        onChange={dropDownChangeHandler}
        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
      >
        <option value="pleaseselect" disabled selected>
          Please Select
        </option>
        {dropdownData.map((item) => (
          <option key={item.id} id={item.id} value={JSON.stringify(item)}>
            {item.projectName}
          </option>
        ))}
      </select>
    </div>
  );
};
export default ModalDropDown;
