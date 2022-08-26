import { IFirebaseUser } from "../../Interfaces/Firebase-Interfaces/UserInterface";

interface ModalCheckboxProps {
  data: IFirebaseUser[];
  checkboxClickHandler: (
    e: React.ChangeEvent<HTMLInputElement>,
    user: IFirebaseUser
  ) => void;
  checkboxName: string;
}

const ModalCheckbox = (props: ModalCheckboxProps) => {
  return (
    <div className="bg-gray-50 flex flex-col h-44 overflow-auto border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white">
      {props.data.map((item) => (
        <label key={item.id} className="text-lg p-1">
          <input
            onChange={(e) => props.checkboxClickHandler(e, item)}
            className="mr-4"
            value={item.fullName}
            name={props.checkboxName}
            type="checkbox"
          />
          {item.fullName}
        </label>
      ))}
    </div>
  );
};
export default ModalCheckbox;
