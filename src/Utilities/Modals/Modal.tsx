import { IFirebaseUser } from "../../Interfaces/Firebase-Interfaces/UserInterface";
import ModalButton from "./ModalButton";
import ModalCheckbox from "./ModalCheckbox";
import ModalCloseButton from "./ModalCloseButton";
import ModalLabel from "./ModalLabel";

interface ModalProps {
  header: string;
  firstLabel?: string;
  firstPlaceholder?: string;
  firstLabelName: string;
  secondLabel?: string;
  secondPlaceholder?: string;
  secondLabelName?: string;
  thirdLabel?: string;
  thirdPlaceholder?: string;
  thirdLabelName?: string;
  clickHandler: () => void;
  isFormValidated: boolean;
  buttonText: string;
  handleSubmit: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
  handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  data?: IFirebaseUser[] | null;
  checkboxClickHandler?: (
    e: React.ChangeEvent<HTMLInputElement>,
    user: IFirebaseUser
  ) => void;
  checkboxName?: string;
  showSuccessMessage: boolean;
  successMessage: string;
}

const Modal = (props: ModalProps) => {
  return (
    <div>
      <div className="w-full ml-auto fixed min-h-screen top-0 bg-black bg-opacity-75 z-50">
        <div className="absolute bg-white rounded-lg shadow top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-11/12 max-w-xl">
          <ModalCloseButton clickHandler={props.clickHandler} />
          <div className="py-6 px-6 lg:px-8">
            <h3 className="mb-4 text-xl font-medium text-gray-900 dark:text-white">
              {props.header}
            </h3>
            <form className="space-y-6">
              {props.firstLabel && props.firstPlaceholder && (
                <ModalLabel
                  label={props.firstLabel}
                  placeholder={props.firstPlaceholder}
                  labelName={props.firstLabelName}
                  handleChange={props.handleChange}
                />
              )}
              {props.secondLabel &&
                props.secondPlaceholder &&
                props.secondLabelName && (
                  <ModalLabel
                    label={props.secondLabel}
                    placeholder={props.secondPlaceholder}
                    labelName={props.secondLabelName}
                    handleChange={props.handleChange}
                  />
                )}
              {props.data &&
                props.checkboxName &&
                props.checkboxClickHandler && (
                  <ModalCheckbox
                    data={props.data}
                    checkboxName={props.checkboxName}
                    checkboxClickHandler={props.checkboxClickHandler}
                  />
                )}
              {props.showSuccessMessage && (
                <p className="text-green-500 font-bold">
                  {props.successMessage}
                </p>
              )}
              <ModalButton
                handleSubmit={props.handleSubmit}
                buttonText={props.buttonText}
                isFormValidated={props.isFormValidated}
              />
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Modal;
