import React from 'react'
import { Modal } from '@mantine/core'
import Project from '../pages/project'
import { IProject } from '../utils/types/project.type'
import { ProjectsRecord } from '../lib/pocketbase-types'

interface PreviewProjectModalProps {
  preview: boolean, 
  project: ProjectsRecord, 
  setPreview: (preview: boolean) => void,
}

function PreviewProjectModal({ preview, project, setPreview }: PreviewProjectModalProps ) {
  return (
    <Modal
      opened={preview}
      onClose={() => setPreview(false)}
      fullScreen
      overflow='inside'
      padding={0}
      classNames={{
        header: 'p-4',
        modal: 'overflow-hidden'
      }}
    >
      <Project projectId={project?.id} project={project} />
    </Modal>
  )
}

export default PreviewProjectModal