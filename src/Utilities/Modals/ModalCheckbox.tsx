import { IFirebaseUser } from "../../Interfaces/Firebase-Interfaces/UserInterface";
import { Link } from "react-router-dom";

interface ModalCheckboxProps {
  data: IFirebaseUser[];
  checkboxClickHandler: (
    e: React.ChangeEvent<HTMLInputElement>,
    user: IFirebaseUser
  ) => void;
  checkboxName: string;
  checkboxLabel: string;
}

const ModalCheckbox = (props: ModalCheckboxProps) => {
  return (
    <div>
      <label>{props.checkboxLabel}</label>
      <div className="bg-gray-50 flex flex-col h-44 overflow-auto border border-gray-300 text-gray-900 text-sm rounded-lg w-full p-2.5 mt-1.5">
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

        {/* IF CHECKBOX IS USED FOR ASSIGNING USER AND THE LIST IS EMPTY SHOW THIS MESSAGE */}
        {props.checkboxName === "assignedUsers" && props.data.length === 0 && (
          <p className="font-bold">
            No user found for this project. Click
            <Link to="/">
              <span className="decoration-blue-600 px-1 underline underline-offset-2 hover:text-gray-600 hover:decoration-blue-400">
                here
              </span>
            </Link>
            to add.
          </p>
        )}
      </div>
    </div>
  );
};
export default ModalCheckbox;
