import React from "react";

interface ItemProps {
  id: string;
  src: string;
  datatext: string;
  content: string;
}

export const Item: React.FC<ItemProps> = ({
  id,
  src,
  datatext,
  content,
}) => {
  return (
    <div className="timeline-item" data-text={datatext}>
      <div className="timeline__content">
        <div className="timeline_img_div">
          <img className="timeline__img" src={src} alt="image"/>
        </div>
        <p className="timeline__content-desc">{content}</p>
      </div>
    </div>
  );
};

