import { IUser } from "./user.type";

export interface IReward {
  project: string,
  title: string | null,
  description: string | null,
  how_to_get: string | null,
  image: string | null,
  cost: number ,
  count: number ,
  bought: number ,
  sending: Date,
  uid: string ,
  id: string ,
  user: string
}
