import React from 'react';

interface ItemProps {
  id: string;
  contentTitle: string;
  src: string;
  datatext: string;
  content: string;
}

const Item: React.FC<ItemProps> = ({ id, contentTitle, src, datatext, content }) => {
  return (
    <div className="timeline-item" data-text={datatext}>
      <div className="timeline__content">
        <div className="timeline_img_div">
          <img className="timeline__img" src={src} alt={contentTitle} />
        </div>
        <p className="timeline__content-desc">{content}</p>
      </div>
    </div>
  );
};

export default Item;
