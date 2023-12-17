import { FC } from 'react';
import { FullPageLayout, InnerCard } from '../Layout/Layout';
import { Gradient1, Gradient2 } from '../components/Header';
import { Description1, Grey, Right, Title } from '../components/Typo';

export const HomePage: FC = () => {
  return (
    <FullPageLayout>
      <Gradient1 />
      <InnerCard>
        <Title>
          JACKSON's
          <br />
          <span style={{ color: 'red' }}> CHRISTMAS PARTY </span>
          <br />
          IN 2023
        </Title>

        <br />
        <Description1>
          <Grey>당신은 받았다</Grey>
          <Right>초대장</Right>
          <Grey>이제 와야한다</Grey>
          <Right>정자동</Right>
        </Description1>
      </InnerCard>
      <Gradient2 style={{ marginTop: 'auto' }} />
    </FullPageLayout>
  );
};
