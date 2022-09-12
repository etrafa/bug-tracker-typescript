import { Timestamp } from "firebase/firestore";

export interface IComment {
  belongedTicketID: string;
  comment: string;
  commentOwner: string;
  createdAt: Timestamp;
}
