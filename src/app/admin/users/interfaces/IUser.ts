export interface IUser {
  id: number;
  userName: string;
  email: string;
  country: string;
  phoneNumber: number;
  imagePath: string;
  creationDate: string;
  modificationDate: string;
  group: IGroup;
}
export interface IGroup {
  id: number;
  name: string;
}
