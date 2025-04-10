// components/ui/carrousel.jsx
import React, { useState, useEffect, useRef, Children, cloneElement } from 'react';

export const Carrousel = ({
  interval = 5000,
  fit = 'cover',
  aspectRatio = '16/9',
  children,
}) => {
  const [current, setCurrent] = useState(0);
  const timer = useRef(null);

  const items = Children.toArray(children).filter(child => child.type?.displayName === 'CarrouselItem');

  const goTo = (index) => {
    setCurrent((index + items.length) % items.length);
  };

  const next = () => goTo(current + 1);
  const prev = () => goTo(current - 1);

  useEffect(() => {
    clearTimeout(timer.current);

    const currentItem = items[current];
    const media = currentItem?.props?.children;

    if (media?.type === 'media' && media.props.type === 'video') {
      const video = document.createElement('video');
      video.src = media.props.src;
      video.onloadedmetadata = () => {
        timer.current = setTimeout(next, video.duration * 1000 + 250);
      };
    } else {
      timer.current = setTimeout(next, interval);
    }

    return () => clearTimeout(timer.current);
  }, [current, interval, items]);

  const wrapperStyle = {
    aspectRatio,
  };

  return (
    <div className="relative w-full overflow-hidden rounded-2xl" style={wrapperStyle}>
      <div
        className="flex transition-transform duration-500 ease-in-out"
        style={{ transform: `translateX(-${current * 100}%)`, width: `${items.length * 100}%` }}
      >
        {items.map((child, i) => (
          <div key={i} className="w-full flex-shrink-0 h-full">
            {cloneElement(child, { fit })}
          </div>
        ))}
      </div>

      {/* Arrows can be rendered by children */}
      {Children.map(children, child => {
        if (child.type?.displayName === 'CarrouselSuivant') {
          return cloneElement(child, { onClick: next });
        }
        if (child.type?.displayName === 'CarrouselPrecedent') {
          return cloneElement(child, { onClick: prev });
        }
        return null;
      })}

      {/* Dots */}
      <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-2 z-10">
        {items.map((_, i) => (
          <button
            key={i}
            onClick={() => goTo(i)}
            className={`w-3 h-3 rounded-full ${i === current ? 'bg-white' : 'bg-white/50'}`}
          />
        ))}
      </div>
    </div>
  );
};

export const CarrouselItem = ({ children, fit = 'cover' }) => {
  if (children?.type === 'media') {
    const { type, src, children: caption, unmute = false } = children.props;
    if (type === 'image') {
      return (
        <div className="w-full h-full relative">
          <img src={src} alt="carousel" className={`w-full h-full object-${fit}`} draggable={false} />
          {caption && <div className="absolute bottom-4 left-4 text-white text-shadow-md">{caption}</div>}
        </div>
      );
    }
    if (type === 'video') {
      return (
        <div className="w-full h-full relative">
          <video
            src={src}
            controls
            autoPlay
            muted={!unmute}
            className={`w-full h-full object-${fit}`}
          />
          {caption && <div className="absolute bottom-4 left-4 text-white text-shadow-md">{caption}</div>}
        </div>
      );
    }
  }
  return <div className="w-full h-full">{children}</div>;
};
CarrouselItem.displayName = 'CarrouselItem';

export const CarrouselSuivant = ({ onClick }) => (
  <button
    onClick={onClick}
    className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white p-2 rounded-full shadow z-10"
  >
    ›
  </button>
);
CarrouselSuivant.displayName = 'CarrouselSuivant';

export const CarrouselPrecedent = ({ onClick }) => (
  <button
    onClick={onClick}
    className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white p-2 rounded-full shadow z-10"
  >
    ‹
  </button>
);
CarrouselPrecedent.displayName = 'CarrouselPrecedent';
