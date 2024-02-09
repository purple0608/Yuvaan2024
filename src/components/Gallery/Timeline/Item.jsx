import React from "react";

export const Item = ({ src, datatext, content }) => {
  return (
    <div className="timeline-item" data-text={datatext}>
      <div className="timeline__content">
        <div className="timeline_img_div">
          <img className="timeline__img" src={src} alt="image" />
        </div>
        <p class="timeline__content-desc">{ content }</p>
      </div>
    </div>
  );
};
