import { IUser } from "./user";

export interface IContest {
  _id: string;
  category: string;
  authorId: string;
  photos: [],
  title: string;
  titleImg: string;
  prize: number;
  openDate: Date;
  closeDate: Date;
  winner: IUser;
}
