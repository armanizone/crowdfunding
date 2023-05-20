import { IProject } from './types/project.type';
import { FileQueryParams, Record } from "pocketbase"
import pb from "../lib/pb"

const url = (record: Record | any, path: string, params?: FileQueryParams) => {
  if (!record || !path) return ''
  return pb.getFileUrl(record, path, {...params})
}

export default url