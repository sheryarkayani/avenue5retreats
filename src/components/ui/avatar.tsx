import React from 'react'

export function Avatar({ className, children, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div className={`relative inline-block ${className}`} {...props}>
      {children}
    </div>
  )
}

export function AvatarImage({ src, alt = '' }: { src: string; alt?: string }) {
  return <img src={src} alt={alt} className="w-full h-full object-cover rounded-full" />
}

export function AvatarFallback({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex items-center justify-center w-full h-full bg-muted text-muted-foreground rounded-full">
      {children}
    </div>
  )
}

