// src/components/ui/carousel.tsx
import React from 'react';
import { CarouselProps, CarouselItemProps } from '../../types/carousel';

export const Carousel: React.FC<CarouselProps> = ({ className, children, ...props }) => {
  return (
    <div className={`carousel ${className}`} {...props}>
      {children}
    </div>
  );
};

export const CarouselContent: React.FC<CarouselProps> = ({ className, children, ...props }) => {
  return (
    <div className={`carousel-content ${className}`} {...props}>
      {children}
    </div>
  );
};

export const CarouselItem: React.FC<CarouselItemProps> = ({ className, children, ...props }) => {
  return (
    <div className={`carousel-item ${className}`} {...props}>
      {children}
    </div>
  );
};

export const CarouselPrevious: React.FC<React.HTMLAttributes<HTMLButtonElement>> = (props) => {
  return <button {...props} className={`carousel-prev ${props.className}`} />;
};

export const CarouselNext: React.FC<React.HTMLAttributes<HTMLButtonElement>> = (props) => {
  return <button {...props} className={`carousel-next ${props.className}`} />;
};
