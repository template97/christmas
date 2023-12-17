import styled from 'styled-components';

import image from '../assets/snowman.jpeg';

export const BGImage = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  width: 100%;
  height: 100%;
  z-index: -1;

  background-image: url(${image});
  background-size: 500px;
`;
