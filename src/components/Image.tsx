import React from 'react'
import { Link } from 'react-router-dom'
import url from '../utils/url'
import clsx from 'clsx'

interface ImageProps {
  obj: any,
  className?: string,
  placeholder?: string,
}

function Image({obj, className, placeholder}: ImageProps) {

  if (obj?.preview_image) return (
    <img src={obj.preview_image} className={clsx('aspect-video object-cover z-50', className)} alt="" />
  ) 

  if (obj?.image) return (
    <img src={url(obj, obj?.image)} className={clsx('aspect-video object-cover z-50', className)} alt="" />
  )

  return <div className={clsx('aspect-video object-cover z-50 bg-sky-4 bg-slate-200 border-b border-slate-200 rounded', placeholder)}/>

}

export default Image