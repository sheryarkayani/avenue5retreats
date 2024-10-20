import React from 'react'

export function Carousel({ className, children }: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div className={`relative ${className}`}>
      {children}
    </div>
  )
}

export function CarouselContent({ children }: { children: React.ReactNode }) {
  return <div className="flex">{children}</div>
}

export function CarouselItem({ children }: { children: React.ReactNode }) {
  return <div className="flex-shrink-0 w-full">{children}</div>
}

export function CarouselPrevious() {
  return <button className="absolute left-0 top-1/2 transform -translate-y-1/2">Previous</button>
}

export function CarouselNext() {
  return <button className="absolute right-0 top-1/2 transform -translate-y-1/2">Next</button>
}

