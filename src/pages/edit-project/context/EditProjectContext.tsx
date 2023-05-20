import React from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import useAuth from '../../../hooks/useAuth'
import ProjectService from '../../../services/ProjectService'
import { IProject } from '../../../utils/types/project.type'
import { IReward } from '../../../utils/types/reward.type'
import { useQuery } from '@tanstack/react-query'
import { Load } from '../../../components'
import { Record } from 'pocketbase'

interface EditProjectContextProps {
  handleTabChange: (value: any) => void,
  project?: IProject | any,
  rewards?: IReward[] | any,
  id?: string,
  refetch: any,
  projectLoading?: boolean,
  rewardLoading?: boolean,
}

const EditProjectContext = React.createContext<EditProjectContextProps>({} as EditProjectContextProps)

function EditProjectProvider({children}: {children: React.ReactNode}) {

  const { id } = useParams()
  const { user } = useAuth()
  const navigate = useNavigate()

  function handleTabChange (value: string) {
    if (value === 'edit') return navigate(`/project/${id}/edit`)
    return navigate(value)
  }

  const [project, setProject] = React.useState<any>({})
  const [rewards, setRewards] = React.useState<any>([])

  const {data, refetch, isLoading} = useQuery({
    queryKey: ['project'],
    queryFn: () => ProjectService.getProjectByUser(id!, user?.id!),
    refetchOnMount: true,
    refetchOnReconnect: true,
    refetchOnWindowFocus: false,
    refetchIntervalInBackground: false,
  })

  React.useEffect(() => {
    setProject(data)
    setRewards(data?.expand?.rewards ?? [])
  }, [data])

  if (isLoading) return <Load/>

  return (
    <EditProjectContext.Provider value={{
      handleTabChange,
      project,
      rewards,
      id,
      refetch
    }}>
      {children}
    </EditProjectContext.Provider>
  ) 
}

const useEditProjectContext = () => {
  return React.useContext(EditProjectContext)
}

export { EditProjectProvider, useEditProjectContext }

