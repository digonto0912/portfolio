import React from 'react';

const EiraGroupOverview = () => {
  return (
    <div style={{ width: '100%', height: '100vh' }}>
      <iframe
        src="/eiraProjectOverview.html"
        title="ERA Group ERP Overview"
        style={{ width: '100%', height: '100%', border: 'none' }}
      ></iframe>
    </div>
  );
};

export default EiraGroupOverview;