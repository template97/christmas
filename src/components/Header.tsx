import styled, { keyframes } from 'styled-components';

const gradient = keyframes`
  0% {
    background-position: 300% 0%;
  }
  100% {
    background-position: 0% 0%;
  }
`;

export const CardHeader = styled.div`
  width: 100%;
  height: 50px;

  background-color: black;
`;

export const Gradient1 = styled.div`
  flex-shrink: 0;
  width: 100%;
  height: 36px;

  background-image: repeating-linear-gradient(135deg, transparent, transparent 20px, #ffffff10 80px, #ffffff10 100px),
    linear-gradient(90deg, #cf1f22, #00690c, #cf1f22);
  animation: ${gradient} 30s linear infinite;
  background-size: 150% 100%;
`;
export const Gradient2 = styled.div`
  flex-shrink: 0;
  width: 100%;
  height: 36px;

  background-image: repeating-linear-gradient(135deg, transparent, transparent 20px, #ffffff10 80px, #ffffff10 100px),
    linear-gradient(90deg, #00690c, #cf1f22, #00690c);
  animation: ${gradient} 30s linear infinite;
  background-size: 150% 100%;
`;
