import { IContest } from "./contest";

export interface IUser {
  objectId: string;
  email: string;
  username: string;
  password: string;
  created_at: string;
  contestsOwner: IContest[];
  contestsParticipates: IContest[];
}