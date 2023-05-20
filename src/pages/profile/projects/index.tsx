import React from 'react'
import { Pagination, Tabs } from '@mantine/core'
import { Outlet, useLocation, useNavigate } from 'react-router-dom'
import useAuth from '../../../hooks/useAuth'

import { FaDraftingCompass, FaRocket, FaCalendarAlt } from 'react-icons/fa'
import Active from './Active'
import Closed from './Closed'
import Draft from './Draft'
import { IProject } from '../../../utils/types/project.type'

import { useMediaQuery, usePagination } from '@mantine/hooks';
import { useQuery } from '@tanstack/react-query'
import ProjectService from '../../../services/ProjectService'

function MyProjects() {

  const { user } = useAuth()
  const location = useLocation().pathname
  const navigate = useNavigate()

  const tabValue =
    (location.includes('projects/active') && 'projects/active') ||
    (location.includes('projects/closed') && 'projects/closed') || 'projects'

  const status = 
    (location.includes('active') && 'active') ||
    (location.includes('closed') && 'closed') || 'draft'

  const [page, setPage] = React.useState(1) 

  const {data, isFetching, refetch, error} = useQuery({
    queryKey: ['projectByUser', status, page],
    queryFn: () => ProjectService.getProjectsByUser(user?.id as string, page, status),
    keepPreviousData: true,
    refetchOnMount: true,
    refetchOnWindowFocus: false,
  })

  React.useEffect(() => {
    refetch()
  }, [location])

  const pagination = usePagination({ total: data?.totalPages!, page, onChange: setPage })

  const handleTabChange = async  (value: string | null) => {
    navigate(`/profile/${value}`)
    pagination.setPage(1)
  }

  const matches = useMediaQuery('(min-width: 978px)');

  return (
    <div className='w-full'>        
      <div className='flex flex-col gap-y-4'>
        <div className='flex justify-end'>
          <Pagination
            page={page}
            total={data?.totalPages!}
            onChange={(e) => pagination.setPage(e)}
          />
        </div>
        <Tabs
          orientation={matches ? 'vertical' : 'horizontal'}
          classNames={{
            tabIcon: 'text-2xl p-4',
            tabsList: 'bg-white',
            root: 'border rounded-md overflow-hidden',
          }}
          value={tabValue}
          onTabChange={value => handleTabChange(value)}
        >
          <Tabs.List
            position={matches ? 'left' : 'center'}
          >
            <Tabs.Tab value='projects' icon={<FaDraftingCompass/>}></Tabs.Tab>
            <Tabs.Tab value='projects/active' icon={<FaRocket/>} ></Tabs.Tab>
            <Tabs.Tab value='projects/closed' icon={<FaCalendarAlt/>}></Tabs.Tab>
          </Tabs.List>
          
          <Tabs.Panel value='projects' className='bg-white p-3 md:p-6'>
            <Draft 
              values={data?.items} 
              loading={isFetching} 
              refetch={refetch}
            />
          </Tabs.Panel>
          <Tabs.Panel value='projects/active' className='bg-white p-3 md:p-6'>
            <Active 
              values={data?.items} 
              loading={isFetching} 
              refetch={refetch}
            />
          </Tabs.Panel>
          <Tabs.Panel value='projects/closed' className='bg-white p-3 md:p-6'>
            <Closed 
              values={data?.items} 
              loading={isFetching} 
              refetch={refetch}
            />
          </Tabs.Panel>
        </Tabs>
        <div className='flex justify-end'>
          <Pagination
            page={page}
            total={data?.totalPages!}
            onChange={(e) => pagination.setPage(e)}
          />
        </div>
      </div>
    </div>
  )
}

export default MyProjects