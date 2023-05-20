import pb from "../lib/pb";
import { Collections, ProjectsRecord, RewardsRecord } from "../lib/pocketbase-types";

async function createReward (project: ProjectsRecord, data: RewardsRecord | FormData) {
  await pb.collection(Collections.Rewards).create(data)
  .then(async (reward) => { 
    return await pb.collection(Collections.Projects).update(project.id!, {
      rewards: [...project.rewards!, reward.id]
    })
  })
}

async function updateReward (id: string, data: RewardsRecord | FormData) {
  await pb.collection(Collections.Rewards).update(id, data)
}

async function deleteReward (id: string) {
  await pb.collection(Collections.Rewards).update(id)
}

async function getRewardsbyProject (id: string, uid: string) {
  await pb.collection(Collections.Rewards).getList(1, 4, {
    filter: `id = "${id}" && project_id.uid = "${uid}"`
  })
}

export default {
  createReward,
  updateReward,
  deleteReward,
  getRewardsbyProject
}