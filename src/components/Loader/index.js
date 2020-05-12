import React from 'react'
import Loader from 'react-loader-spinner';

import './styles.css'

const Loading = ({ waiting, children }) => {
  if (waiting) {
    return (
      <div className="svg-wrapper">
        <Loader
          type="Grid"
          color="#00BFFF"
          height={50}
          width={50}
          timeout={0}
          align="center" //3 secs
        />
      </div>
    )
  } else {
    return children
  }
}
export default Loading