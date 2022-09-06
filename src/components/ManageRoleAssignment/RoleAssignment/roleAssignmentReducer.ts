export const initialState = {
  selectedUserID: "",
  userCurrentRole: "",
  userNewRole: "",
  isFormValidated: false,
};

export enum ACTION_DEF {
  SET_SELECTED_USER_ID = "setSelectedUserID",
  SET_USER_CURRENT_ROLE = "setUserCurrentRole",
  SET_USER_NEW_ROLE = "setUserNewRole",
  SET_IS_FORM_VALIDATED = "isFormValidated",
}

type ACTIONTYPES =
  | { type: ACTION_DEF.SET_SELECTED_USER_ID; payload: string }
  | { type: ACTION_DEF.SET_USER_CURRENT_ROLE; payload: string }
  | { type: ACTION_DEF.SET_USER_NEW_ROLE; payload: string }
  | { type: ACTION_DEF.SET_IS_FORM_VALIDATED; payload: boolean };

export const roleAssignmentReducer = (
  state: typeof initialState,
  action: ACTIONTYPES
) => {
  switch (action.type) {
    //get selected user ID
    case ACTION_DEF.SET_SELECTED_USER_ID:
      return { ...state, selectedUserID: action.payload };
    //get selected user CURRENT ROLE
    case ACTION_DEF.SET_USER_CURRENT_ROLE:
      return { ...state, userCurrentRole: action.payload };
    //get selected user NEW ROLE
    case ACTION_DEF.SET_USER_NEW_ROLE:
      return { ...state, userNewRole: action.payload };
    //check if the form is validated properly
    case ACTION_DEF.SET_IS_FORM_VALIDATED:
      return { ...state, isFormValidated: action.payload };
    default:
      throw new Error("An error happened.");
  }
};
