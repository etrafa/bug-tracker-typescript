interface AssignedUsers {
  email: string;
  fullName: string;
  id: string;
  role: string;
  tickets: string[];
}

export interface ITicketsRoot {
  assignedUsers: AssignedUsers[];
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
