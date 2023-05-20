import React from 'react'
import { Tabs } from '@mantine/core';
import { Outlet, useLocation, useNavigate, useParams } from 'react-router-dom';
import Main from './widgets/Main';
import Details from './widgets/Details';
import Rewards from './widgets/Rewards';
import Verification from './widgets/Verification';
import Incubator from './widgets/Incubator';
import { EditProjectProvider, useEditProjectContext } from './context/EditProjectContext';
import { Load } from '../../components';
import PreviewProjectModal from '../../components/PreviewProjectModal';

export const styles = {
  row: 'grid grid-cols-1 lg:grid-cols-[75%_auto] relative gap-4',
  restInfo: 'absolute bottom-1 right-1 text-xs text-slate-400',
  textarea: 'max-h-[120px] overflow-hidden resize-y',
  addtionalField: 'p-4 grid-cols-1 sm:grid-cols-[275px_auto]',
  checkField: 'flex flex-col w-full',
  checkLabel: 'p-4',
  error: 'text-xs'
} 

function EditProject () {
  return (
    <EditProjectProvider>
      <EditProjectPage/>
    </EditProjectProvider>
  )
}

function EditProjectPage() {

  const { handleTabChange } = useEditProjectContext()

  const location = useLocation().pathname
  const navigate = useNavigate()

  const tabValue = 
    (location.includes(`details`) && `details`) ||
    (location.includes(`rewards`) && `rewards`) ||
    (location.includes(`verification`) && `verification`) ||
    (location.includes(`incubator`) && `incubator`) || `edit`

  return (  
    <EditProjectProvider>
      <div className='w-full box-border'>
        <div className="container">
          <div className='w-full'>
            <Tabs
              value={`${tabValue}`}
              onTabChange={(value) => handleTabChange(value as string)}
              variant='pills'
              radius='md'
              classNames={{
                tabLabel: 'text-xl',
                tabsList: 'wrapper'
              }}
            >
              <Tabs.List>
                <Tabs.Tab value={`edit`}>Осноные данные</Tabs.Tab>
                <Tabs.Tab value={`details`}>Детали</Tabs.Tab>
                <Tabs.Tab value={`rewards`}>Вознаграждения</Tabs.Tab>
                <Tabs.Tab value={`verification`}>Верификация</Tabs.Tab>
                <Tabs.Tab value={`incubator`}>Бизнес-инкубатор</Tabs.Tab>  
              </Tabs.List>
              <Tabs.Panel value={tabValue} pt='md'>
                <Outlet/> 
              </Tabs.Panel>
            </Tabs>
          </div>
        </div>
      </div>
    </EditProjectProvider>
  )
}

export default EditProject