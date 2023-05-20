import React from 'react'
import { Link } from 'react-router-dom'
import url from '../../utils/url'

function CardImage({project}: any) {

  if(project?.previewImage) return (
    <img 
      src={project.previewImage}
      alt={'preview'}
      className='aspect-video object-cover z-50'
    />
  )

  if (project.image) return (
    project.status === 'active' ?
      <Link to={`/project/${project?.id}`}>
        <img 
          src={url(project, project?.image)}
          alt={project.image}
          className='aspect-video object-cover z-50'
        />
      </Link>
      :
      <img 
        src={url(project, project?.image)}
        alt={project.image}
        className='aspect-video object-cover z-50'
      />
  )

  return <div className='aspect-video object-cover z-50 bg-slate-200 border-b border-slate-200'/>

}

export default CardImage