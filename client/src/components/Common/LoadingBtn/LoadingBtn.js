import React from 'react'
import styled from 'styled-components'

const Icon = styled.svg`
  transform: translateX(-50%);
  position: relative;
  left: 50%;
  top: 50px;
`

const LoadingBtn = ({ className, onClick, color }) => (
  <Icon
    width="80px"
    height="80px"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 100 100"
    preserveAspectRatio="xMidYMid"
  >
    <circle cx="84" cy="50" r="0" fill="#71c2cc">
      <animate
        attributeName="r"
        values="10;0;0;0;0"
        keyTimes="0;0.25;0.5;0.75;1"
        keySplines="0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1"
        calcMode="spline"
        dur="1s"
        repeatCount="indefinite"
        begin="0s"
      />
      <animate
        attributeName="cx"
        values="84;84;84;84;84"
        keyTimes="0;0.25;0.5;0.75;1"
        keySplines="0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1"
        calcMode="spline"
        dur="1s"
        repeatCount="indefinite"
        begin="0s"
      />
    </circle>
    <circle cx="16" cy="50" r="7.62384" fill="#d8ebf9">
      <animate
        attributeName="r"
        values="0;10;10;10;0"
        keyTimes="0;0.25;0.5;0.75;1"
        keySplines="0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1"
        calcMode="spline"
        dur="1s"
        repeatCount="indefinite"
        begin="-0.5s"
      />
      <animate
        attributeName="cx"
        values="16;16;50;84;84"
        keyTimes="0;0.25;0.5;0.75;1"
        keySplines="0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1"
        calcMode="spline"
        dur="1s"
        repeatCount="indefinite"
        begin="-0.5s"
      />
    </circle>
    <circle cx="84" cy="50" r="2.37616" fill="#5699d2">
      <animate
        attributeName="r"
        values="0;10;10;10;0"
        keyTimes="0;0.25;0.5;0.75;1"
        keySplines="0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1"
        calcMode="spline"
        dur="1s"
        repeatCount="indefinite"
        begin="-0.25s"
      />
      <animate
        attributeName="cx"
        values="16;16;50;84;84"
        keyTimes="0;0.25;0.5;0.75;1"
        keySplines="0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1"
        calcMode="spline"
        dur="1s"
        repeatCount="indefinite"
        begin="-0.25s"
      />
    </circle>
    <circle cx="75.921" cy="50" r="10" fill="#1d3f72">
      <animate
        attributeName="r"
        values="0;10;10;10;0"
        keyTimes="0;0.25;0.5;0.75;1"
        keySplines="0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1"
        calcMode="spline"
        dur="1s"
        repeatCount="indefinite"
        begin="0s"
      />
      <animate
        attributeName="cx"
        values="16;16;50;84;84"
        keyTimes="0;0.25;0.5;0.75;1"
        keySplines="0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1"
        calcMode="spline"
        dur="1s"
        repeatCount="indefinite"
        begin="0s"
      />
    </circle>
    <circle cx="41.921" cy="50" r="10" fill="#71c2cc">
      <animate
        attributeName="r"
        values="0;0;10;10;10"
        keyTimes="0;0.25;0.5;0.75;1"
        keySplines="0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1"
        calcMode="spline"
        dur="1s"
        repeatCount="indefinite"
        begin="0s"
      />
      <animate
        attributeName="cx"
        values="16;16;16;50;84"
        keyTimes="0;0.25;0.5;0.75;1"
        keySplines="0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1"
        calcMode="spline"
        dur="1s"
        repeatCount="indefinite"
        begin="0s"
      />
    </circle>
  </Icon>
)

export default LoadingBtn
