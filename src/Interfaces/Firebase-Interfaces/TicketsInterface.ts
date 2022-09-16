import { IFirebaseUser } from "./UserInterface";

export interface ITicketsRoot {
  assignedUsers: IFirebaseUser[];
  id: string;
  projectName: string;
  submitTime: string;
  ticketDescription: string;
  ticketOwner: string;
  ticketPriority: string;
  ticketStatus: string;
  ticketType: string;
  userEmails: string[];
}
