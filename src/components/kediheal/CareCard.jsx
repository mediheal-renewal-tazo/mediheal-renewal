import React from 'react';
import './CareCard.scss';

const CareCard = ({ title, subtitle, mediaType, mediaSource }) => {
  return (
    <div className="care-card">
      <div className="care-card__image-wrapper">
        {mediaType === 'video' ? (
          <video
            src={mediaSource}
            autoPlay
            muted
            loop
            playsInline
            className="care-card__media"
          />
        ) : (
          <img src={mediaSource} alt={title} className="care-card__media" />
        )}
      </div>
      <div className="care-card__content">
        <h3 className="care-card__title">{title}</h3>
        <p className="care-card__subtitle" dangerouslySetInnerHTML={{ __html: subtitle }} />
      </div>
    </div>
  );
};

export default CareCard;
