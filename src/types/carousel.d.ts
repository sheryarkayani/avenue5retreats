// src/types/carousel.d.ts
import React, { ReactNode, HTMLAttributes } from 'react';

export interface CarouselProps extends HTMLAttributes<HTMLDivElement> {
  className?: string;
  children: ReactNode;
}

export interface CarouselItemProps extends HTMLAttributes<HTMLDivElement> {
  className?: string;
  children: ReactNode;
}

declare module '@/components/ui/carousel' {
  export const Carousel: React.FC<CarouselProps>;
  export const CarouselContent: React.FC<CarouselProps>;
  export const CarouselItem: React.FC<CarouselItemProps>;
  export const CarouselPrevious: React.FC<HTMLAttributes<HTMLButtonElement>>;
  export const CarouselNext: React.FC<HTMLAttributes<HTMLButtonElement>>;
}
