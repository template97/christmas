import { FC } from 'react';
import { FullPageLayout, InnerCard } from '../Layout/Layout';
import { Gradient1, Gradient2 } from '../components/Header';
import { Description1, Description2, Left2, Right2, Row, Title } from '../components/Typo';

export const HomePage: FC = () => {
  return (
    <FullPageLayout>
      <Gradient1 />
      <InnerCard>
        <Title>
          JACKSON's
          <br />
          <span style={{ color: '#cf1f22' }}> CHRISTMAS PARTY </span>
          <br />
          IN 2023
        </Title>

        <br />

        <Description1>
          당신은 받았다 초대장. 함께한다 파티. 할수 없다 거절. 들고온다 선물. 교환한다 랜덤. 듣는다 캐롤. 입는다
          크리스마스 니트. 먹는다 맛있는거.
          {/*  */}
        </Description1>

        <Description2>
          <Row>
            <Left2>언제</Left2>
            <Right2>2023.12.24 17:00 </Right2>
          </Row>
          <Row>
            <Left2>어디서</Left2>
            <Right2>잭슨집, 정자동 인텔리지 2 A동 1601호</Right2>
          </Row>
          <Row>
            <Left2>준비물</Left2>
            <Right2>1만원 내외의 랜덤 선물, 같이 먹고픈 술</Right2>
          </Row>
        </Description2>
      </InnerCard>
      <Gradient2 style={{ marginTop: 'auto' }} />
    </FullPageLayout>
  );
};
