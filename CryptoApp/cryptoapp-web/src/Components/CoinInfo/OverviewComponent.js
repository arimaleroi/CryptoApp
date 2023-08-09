import React from 'react';

const OverviewComponent = ({ description }) => {
  return (
    <div className="overview">
      <div dangerouslySetInnerHTML={{ __html: description }}></div>
    </div>
  );
};

export default OverviewComponent;