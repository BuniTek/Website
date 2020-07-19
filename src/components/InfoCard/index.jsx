import React from 'react';

import './index.scss';

function InfoCard({ title, description }) {
  return (
    <div className="info__card">
      <div>
        <h3>{ title}</h3>
        <p>
          { description}
        </p>
      </div>
    </div>
  );
}

export default InfoCard;
