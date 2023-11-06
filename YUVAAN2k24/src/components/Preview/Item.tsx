import React from 'react';

interface EventItemProps {
  id: string;
  src: string;
}

const EventItem: React.FC<EventItemProps> = ({ id, src }) => {
  return (
    <div className="swiper-slide">
      <img src={src} alt="event" />
    </div>
  );
};

export default EventItem;
