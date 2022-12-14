export interface IFirebaseUser {
  readonly fullName: string;
  readonly email: string;
  readonly role: string;
  readonly tickets: [];
  readonly id: string;
  isChecked?: boolean; // it is necessary for checkbox
}
