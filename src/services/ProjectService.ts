import pb from "../lib/pb";
import { Collections, ProjectsRecord } from "../lib/pocketbase-types";
import { IProject } from "../utils/types/project.type";

async function createProject (data: ProjectsRecord) {
  return await pb.collection(Collections.Projects).create(data)
} 

async function updateProject (id: string, data: ProjectsRecord | FormData) {
  return await pb.collection(Collections.Projects).update(id, data)
} 

async function getProjectByUser (id: string, uid: string) {
  return await pb.collection(Collections.Projects).getFirstListItem(uid, {
    expand: 'rewards',
    filter: `uid = "${uid}" && id = "${id}"`,
  })
} 

async function deleteProject (id: string) {
  return await pb.collection(Collections.Projects).delete(id)
} 


async function getProjectsByUser (uid: string, page: number, status?: string) {
  return await pb.collection(Collections.Projects).getList(page, 5, {
    expand: 'rewards',
    filter: `uid = "${uid}" && status = "${status}"`
  })
} 

async function getProjectById (id: string) {
  return await pb.collection(Collections.Projects).getOne(id, {
    expand: 'rewards'
  })
}

export default {
  createProject,
  updateProject,
  getProjectByUser,
  getProjectsByUser,
  deleteProject,
  getProjectById,
}