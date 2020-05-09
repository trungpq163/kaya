import React from 'react';
import ContentLoader from 'react-content-loader';

const MyLoader = () => {
  return (
    <ContentLoader
      speed={3}
      width={1280}
      height={980}
      viewBox="0 0 1280 980"
      backgroundColor="#f3f3f3"
      foregroundColor="#bfbfbf"
    >
      <rect x="880" y="25" rx="3" ry="3" width="70" height="20" />
      <rect x="780" y="25" rx="3" ry="3" width="70" height="20" />
      <rect x="81" y="986" rx="3" ry="3" width="1280" height="10" />
      <rect x="81" y="1026" rx="3" ry="3" width="1080" height="9" />
      <rect x="81" y="1046" rx="3" ry="3" width="980" height="8" />
      <circle cx="1166" cy="38" r="16" />
      <rect x="461" y="410" rx="0" ry="0" width="0" height="1" />
      <rect x="90" y="88" rx="0" ry="0" width="1080" height="240" />
      <rect x="680" y="24" rx="3" ry="3" width="70" height="20" />
      <rect x="980" y="25" rx="3" ry="3" width="70" height="20" />
      <rect x="88" y="18" rx="0" ry="0" width="100" height="50" />
      <rect x="1080" y="12" rx="0" ry="0" width="44" height="44" />
      <rect x="200" y="440" rx="0" ry="0" width="180" height="222" />
      <rect x="120" y="380" rx="0" ry="0" width="120" height="28" />
      <rect x="420" y="440" rx="0" ry="0" width="180" height="222" />
      <rect x="640" y="440" rx="0" ry="0" width="180" height="222" />
      <rect x="860" y="440" rx="0" ry="0" width="180" height="222" />
      <rect x="461" y="734" rx="0" ry="0" width="0" height="1" />
      <rect x="200" y="760" rx="0" ry="0" width="180" height="222" />
      <rect x="120" y="700" rx="0" ry="0" width="120" height="28" />
      <rect x="420" y="760" rx="0" ry="0" width="180" height="222" />
      <rect x="640" y="760" rx="0" ry="0" width="180" height="222" />
      <rect x="860" y="760" rx="0" ry="0" width="180" height="222" />
    </ContentLoader>
  );
};

export default MyLoader;