import React from 'react'

export type ImageProps = {
  src?: string
  width?: string | number
  height?: string | number
  className?: string
  alt?: string
}

export const Image = ({ src, className, alt, height, width }: ImageProps) => {
  return <img className={className} alt={alt} src={src} width={width} height={height} />
}
