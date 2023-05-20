import { Record } from "pocketbase";
import { IReward } from "./reward.type";
import { IUser } from "./user.type";

export interface IProject {
  id?: string,
  uid:  string | undefined,
  user:  string,
  status:  string,
  title:  string | null,
  description: string | null,
  image: string | null,
  city: string | null,
  goal: number | null,
  duration: number | null,
  category: string | null,
  detail_description: string | null,
  detail_images?: string[] | null,
  backed?: number,
  earned?: number | null,
  started: Date | null,
  comments?: number, 
  author?: {
    name: string | null,
    front: string | null,
    phone: number | null,
    back: string | null,
    iin: number | null, 
  },
  rewards?: any,
  created?: any
}
