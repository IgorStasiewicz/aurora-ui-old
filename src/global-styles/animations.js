import { keyframes } from "styled-components";

export const show = keyframes`
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
   
  }
  
`;
export const showAnimatedLogoComponent = keyframes`
  0% {
    height: 0;
  }
  100% {
    height: 100%;
  }
`;
export const animatedLogoPaths = keyframes`
    from {
      fill-opacity: 0%;
    }
    to {
      fill-opacity: 100%;
    }
  
`;

export const colorChange = keyframes`
    from {
      fill:#353530;
    }
    to {
  
     fill:#dbbd96;
    }
`;

export const titleAnimation = keyframes`
  0% {
    opacity: 0;
    left: -60px;
  }
  100% {
    opacity: 1;
    left: 1%;
  }
`;

export const lineAnimation = keyframes`
  0% {
    width: 0;
  }
  100% {
    opacity: 1;
    width: 100%;
  }
`;
