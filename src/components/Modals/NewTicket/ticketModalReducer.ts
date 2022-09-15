import { IFirebaseUser } from "../../../Interfaces/Firebase-Interfaces/UserInterface";

export const initialState = {
  projectName: "",
  selectedProjectID: "", //get project ID to find data from firebase DB
  ticketDescription: "", //ticketDescription
  // selectedUsers: [{}],
  selectedUsers: <IFirebaseUser[]>[],
  selectedUsersID: <string[]>[],
  ticketPriority: "Low",
  ticketStatus: "Open",
  ticketType: "Server Issues",
};

export enum ACTION_DEF {
  SET_PROJECT_NAME = "projectName",
  SET_PROJECT_ID = "setProjectID",
  SET_TICKET_DESCRIPTION = "setTicketDescription",
  ADD_SELECTED_USERS = "addSelectedUsers", //add selected user to array
  REMOVE_SELECTED_USERS = "removeSelectedUsers", //remove selected user from array
  SET_USERS_ID = "setUsersID",
  REMOVE_USER_ID = "removeUserId",
  SET_TICKET_PRIORITY = "setTicketPriority",
  SET_TICKET_STATUS = "setTicketStatus",
  SET_TICKET_TYPE = "setTicketType",
}

type ACTIONTYPES =
  | { type: ACTION_DEF.SET_PROJECT_NAME; payload: string }
  | { type: ACTION_DEF.SET_PROJECT_ID; payload: string }
  | { type: ACTION_DEF.SET_TICKET_DESCRIPTION; payload: string }
  | { type: ACTION_DEF.ADD_SELECTED_USERS; payload: IFirebaseUser }
  | { type: ACTION_DEF.REMOVE_SELECTED_USERS; payload: IFirebaseUser }
  | { type: ACTION_DEF.SET_USERS_ID; payload: string }
  | { type: ACTION_DEF.REMOVE_USER_ID; payload: string }
  | { type: ACTION_DEF.SET_TICKET_PRIORITY; payload: string }
  | { type: ACTION_DEF.SET_TICKET_STATUS; payload: string }
  | { type: ACTION_DEF.SET_TICKET_TYPE; payload: string };

export const ticketModalReducer = (
  state: typeof initialState,
  action: ACTIONTYPES
) => {
  switch (action.type) {
    case ACTION_DEF.SET_PROJECT_NAME:
      return { ...state, projectName: action.payload };
    case ACTION_DEF.SET_PROJECT_ID:
      return { ...state, selectedProjectID: action.payload };
    case ACTION_DEF.SET_TICKET_DESCRIPTION: {
      return { ...state, ticketDescription: action.payload };
    }
    case ACTION_DEF.ADD_SELECTED_USERS:
      return {
        ...state,
        selectedUsers: [...state.selectedUsers, action.payload],
      };
    case ACTION_DEF.REMOVE_SELECTED_USERS:
      return {
        ...state,
        selectedUsers: state.selectedUsers.filter(
          (val) => val !== action.payload
        ),
      };
    case ACTION_DEF.SET_USERS_ID:
      return {
        ...state,
        selectedUsersID: [...state.selectedUsersID, action.payload],
      };

    case ACTION_DEF.REMOVE_USER_ID:
      return {
        ...state,
        selectedUsersID: state.selectedUsersID.filter(
          (val) => val !== action.payload
        ),
      };

    case ACTION_DEF.SET_TICKET_PRIORITY:
      return { ...state, ticketPriority: action.payload };
    case ACTION_DEF.SET_TICKET_STATUS:
      return { ...state, ticketStatus: action.payload };
    case ACTION_DEF.SET_TICKET_TYPE:
      return { ...state, ticketType: action.payload };
    default:
      throw new Error("error");
  }
};
