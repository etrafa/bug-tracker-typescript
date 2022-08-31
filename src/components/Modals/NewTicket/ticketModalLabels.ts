//ticket options
export const ticketPriorityLabels = ["Low", "Medium", "High"];
export const ticketTypesLabels = [
  "Server Issues",
  "Bugs/Error",
  "Design",
  "Compatibility",
  "Other",
];
export const ticketStatusLabels = ["Open", "In Progress"];

// create a new time and utilize it when user create a new ticket.
const timeStamp = new Date();
const day = String(timeStamp.getDate()).padStart(2, "0");
const month = String(timeStamp.getMonth() + 1).padStart(2, "0");
const year = timeStamp.getFullYear();

export const SERVER_TIME = [month, day, year].join(".");
