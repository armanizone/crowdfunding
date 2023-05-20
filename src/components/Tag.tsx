import React from 'react'
import clsx from 'clsx'

interface TagProps extends React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  title: string,
  type: 'draft' | 'active' | 'closed',
}

function Tag({title = 'Черновик', type, className, ...props}: TagProps):JSX.Element {

  const isDraft = type === 'draft'
  const isActive = type === 'active'
  const isClosed = type === 'closed'

  return (
    <div 
      className={clsx(className, 'h-min border-l-8 rounded inline-block', {
        'bg-yellow-100 border-l-yellow-500': isDraft ,
        'bg-sky-100 border-l-sky-500': isActive ,
        'bg-gray-100 border-l-gray-400': isClosed
      })}
      {...props}
    >
      <span className={clsx('italic px-3 py-1 block text-sm font-semibold tracking-tight break-normal', {
        'text-yellow-500': isDraft,
        'text-sky-500': isActive,
        'text-gray-400': isClosed
      })}>
        {title}
      </span>
    </div>
  )
}

export default Tag