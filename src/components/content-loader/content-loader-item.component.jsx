import React from "react"
import ContentLoader from "react-content-loader"

const MyLoader = (props) => (
  <ContentLoader
    speed={2}
    width={400}
    height={400}
    viewBox="0 0 400 400"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
    {...props}
  >
    <rect x="340" y="129" rx="0" ry="0" width="0" height="1" />
    <rect x="165" y="26" rx="0" ry="0" width="1" height="0" />
    <rect x="7" y="-1" rx="0" ry="0" width="459" height="461" />
  </ContentLoader>
)

export default MyLoader