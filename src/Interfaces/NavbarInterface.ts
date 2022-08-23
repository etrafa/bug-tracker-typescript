import { IFirebaseUser } from "./Firebase-Interfaces/UserInterface";

export interface INavProps {
  setIsProjectModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
  setIsTicketModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
  setIsNavbarOpen?: React.Dispatch<React.SetStateAction<boolean>>;
  dbData?: IFirebaseUser | null;
}
