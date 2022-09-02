import React from "react";
import { IProject } from "../../Interfaces/Firebase-Interfaces/ProjectInterface";
import { IFirebaseUser } from "../../Interfaces/Firebase-Interfaces/UserInterface";
import ModalButton from "./ModalButton";
import ModalCheckbox from "./ModalCheckbox";
import ModalCloseButton from "./ModalCloseButton";
import ModalDropDown from "./ModalDropDown";
import ModalLabel from "./ModalLabel";
import ModalTicketOptions from "./ModalTicketOptions";
import "./Modal.css";

interface ModalProps {
  header: string;
  firstLabel?: string;
  firstPlaceholder?: string;
  firstLabelName?: string;
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
  checkBoxData?: IFirebaseUser[] | null;
  checkboxClickHandler?: (
    e: React.ChangeEvent<HTMLInputElement>,
    user: IFirebaseUser
  ) => void;
  checkboxName?: string;
  checkBoxLabel?: string;
  showSuccessMessage: boolean;
  successMessage: string;
  dropDownLabel?: string;
  dropDownName?: string;
  dropDownChangeHandler?: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  dropdownData?: IProject[] | null;
  showTicketOptions?: boolean;
  firstTicketOptionsLabel?: string;
  firstTicketOptionChangeHandler?: (
    e: React.ChangeEvent<HTMLSelectElement>
  ) => void;
  firstTicketOptionsData?: string[];
  secondTicketOptionsLabel?: string;
  secondTicketOptionChangeHandler?: (
    e: React.ChangeEvent<HTMLSelectElement>
  ) => void;
  secondTicketOptionsData?: string[];
  thirdTicketOptionsLabel?: string;
  thirdTicketOptionChangeHandler?: (
    e: React.ChangeEvent<HTMLSelectElement>
  ) => void;
  thirdTicketOptionsData?: string[];
}

const Modal = (props: ModalProps) => {
  return (
    <div>
      <div className="w-full ml-auto fixed min-h-screen top-0 bg-black bg-opacity-75 z-50">
        <div className="absolute bg-white rounded-lg shadow top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-11/12 max-w-xl modal-container">
          <ModalCloseButton clickHandler={props.clickHandler} />
          <div className="py-6 px-6 lg:px-8">
            <h3 className="mb-4 text-xl font-medium text-gray-900 dark:text-white">
              {props.header}
            </h3>
            <form className="space-y-6">
              {props.dropDownName &&
                props.dropDownLabel &&
                props.dropdownData &&
                props.dropDownChangeHandler && (
                  <ModalDropDown
                    dropDownChangeHandler={props.dropDownChangeHandler}
                    dropDownLabel={props.dropDownLabel}
                    dropDownName={props.dropDownName}
                    dropdownData={props.dropdownData}
                  />
                )}

              {props.firstLabel &&
                props.firstPlaceholder &&
                props.firstLabelName && (
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
              {props.checkBoxData &&
                props.checkboxName &&
                props.checkboxClickHandler &&
                props.checkBoxLabel && (
                  <ModalCheckbox
                    data={props.checkBoxData}
                    checkboxLabel={props.checkBoxLabel}
                    checkboxName={props.checkboxName}
                    checkboxClickHandler={props.checkboxClickHandler}
                  />
                )}

              {props.showTicketOptions && (
                <div>
                  <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                    Ticket Details
                  </label>
                  <div className="bg-gray-50 flex flex-wrap gap-x-1 gap-y-8 justify-between border border-gray-300 text-gray-900 text-md rounded-lg w-full p-2.5">
                    {props.firstTicketOptionChangeHandler &&
                      props.firstTicketOptionsLabel &&
                      props.firstTicketOptionsData && (
                        <ModalTicketOptions
                          ticketOptionsChangeHandler={
                            props.firstTicketOptionChangeHandler
                          }
                          ticketOptionsData={props.firstTicketOptionsData}
                          ticketOptionsLabel={props.firstTicketOptionsLabel}
                        />
                      )}
                    {props.secondTicketOptionChangeHandler &&
                      props.secondTicketOptionsLabel &&
                      props.secondTicketOptionsData && (
                        <ModalTicketOptions
                          ticketOptionsChangeHandler={
                            props.secondTicketOptionChangeHandler
                          }
                          ticketOptionsData={props.secondTicketOptionsData}
                          ticketOptionsLabel={props.secondTicketOptionsLabel}
                        />
                      )}
                    {props.thirdTicketOptionChangeHandler &&
                      props.thirdTicketOptionsLabel &&
                      props.thirdTicketOptionsData && (
                        <ModalTicketOptions
                          ticketOptionsChangeHandler={
                            props.thirdTicketOptionChangeHandler
                          }
                          ticketOptionsData={props.thirdTicketOptionsData}
                          ticketOptionsLabel={props.thirdTicketOptionsLabel}
                        />
                      )}
                  </div>
                </div>
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
