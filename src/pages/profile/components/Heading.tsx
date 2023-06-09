import React from 'react'
import clsx from 'clsx'

interface HeadingProps extends React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  title: string, 
  description: string
}

function Heading({title, description, className, ...props}: HeadingProps):JSX.Element {
  return (
    <div
      className={clsx(className)}
      {...props}
    >
      <h2 className='text-2xl font-semibold'>{title}</h2>
      <p className='text-slate-400 text-xs'>{description}</p>
    </div>
  )
}

export default Heading 