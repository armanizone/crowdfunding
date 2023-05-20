import React from 'react'
import { Load, Reward } from '../../components'
import Fee from './widgets/Fee'
import Head from './widgets/Head'
import Body from './widgets/body'
import { useLocation, useParams } from 'react-router-dom'
import { IReward } from '../../utils/types/reward.type'
import { IProject } from '../../utils/types/project.type'
import { ProjectsRecord, RewardsRecord } from '../../lib/pocketbase-types'
import { useQuery } from '@tanstack/react-query'
import ProjectService from '../../services/ProjectService'

function Project({projectId, project}: { projectId?: string, project?: ProjectsRecord }) {

  React.useEffect(() => {
    document.body.style.backgroundColor = 'white'
    return () => {
      document.body.style.backgroundColor = 'rgb(248 250 252)'
    }
  }, []) 

  if (projectId) return (
    <ProjectContent 
      project={project} 
      projectId={projectId} 
    />
  )
     
  return <ProjectComponent/>
}

const ProjectContent = ({project, projectId}: any) => {

  const location = useLocation().pathname
  const rewardsSeledted = location.includes('/fee')

  const rewards = project?.expand?.rewards as RewardsRecord[]

  return (
    <div className='w-full my-6'>
      <div className='px-0 bg-border rounded-none'>
        <div className="container">
          <div className='flex flex-col'>
            <Head
              project={project}
            />
            <div className='grid grid-cols-1 lg:grid-cols-[1fr_357px] gap-4 mt-8'>
              <Body 
                project={project} 
                rewards={rewards} 
                projectId={projectId} 
              />
              <Fee 
                rewards={rewards} 
                projectId={projectId} 
              />
            </div>
            {rewardsSeledted && (
              <div className='grid grid-cols-1 sm:grid-col-2 md:grid-cols-3 lg:grid-cols-4 gap-4'>
                {rewards?.map((item: RewardsRecord, i: number) => {
                  return (
                    <Reward reward={item} key={i} style={{animationDelay: `${((i + 1) * 150)}ms` }}/>
                  )
                })}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

const ProjectComponent = () => {

  const { id } = useParams()

  const { data, } = useQuery({
    queryKey: ['projectById', id],
    queryFn: () => ProjectService.getProjectById(id!),    
    keepPreviousData: true,
    refetchOnMount: true,
    refetchOnWindowFocus: false,
  })

  const project = data as unknown as ProjectsRecord
  const rewards = data?.expand?.rewards as unknown as RewardsRecord[]

  if (false || false) return <Load />

  return (
    <ProjectContent project={project} />
  )
}


export default Project