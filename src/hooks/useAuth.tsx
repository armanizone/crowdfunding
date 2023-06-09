import pb from "../lib/pb"

const useAuth = (options?: any) => {

  const logged = pb.authStore.isValid
  const user = pb.authStore.model
  const token = pb.authStore.token  

  return { 
    logged,
    user,
    token
  }
}

export default useAuth
