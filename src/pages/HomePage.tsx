import { FC } from 'react';
import { FullPageLayout, Inner, InnerCard } from '../Layout/Layout';
import { Gradient1, Gradient2 } from '../components/Header';
import {
  Description1,
  Description2,
  Description3,
  Left2,
  Left3,
  Red,
  Right2,
  Right3,
  Row,
  Title,
} from '../components/Typo';

export const HomePage: FC = () => {
  return (
    <FullPageLayout>
      <InnerCard>
        <Inner>
          <Title>
            <Gradient1 />
            <Red> INVITATION </Red>
            TO
            <Red> JACKSON's </Red>
            2023
            <Red> X-MAS </Red>
            HOME
            <Red> PARTY </Red>
            <Gradient2 style={{ marginTop: 'auto' }} />
          </Title>
          <br />

          <Description1>
            당신은 받았다 초대장. 함께한다 파티. 할수 없다 거절. 들고온다 선물. 교환한다 랜덤. 듣는다 캐롤. 입는다
            크리스마스 색깔. 마신다 맛있는거. 먹는다 맛있는거.
            {/*  */}
          </Description1>

          <Description2>
            <Row>
              <Left2>언제</Left2>
              <Right2>2023.12.24 18:00 </Right2>
            </Row>
            <Row>
              <Left2>어디서</Left2>
              <Right2>정자동 인텔리지 2 A동 1601호</Right2>
            </Row>
            <Row>
              <Left2>준비물</Left2>
              <Right2>1만원 내외의 랜덤 선물</Right2>
            </Row>
          </Description2>
          <Description3>
            <Left3>Q. 몇시까지 노나요?</Left3>
            <Right3>
              정식(?) 일정은 11시 즈음으로 예상합니다. 이후에는 무제한으로 술먹고 이야기 하며 놀듯! 밤새 놀고 자고
              다음날 가셔도 됩니다. 토퍼&이불 제공해드립니다~
            </Right3>

            <Left3>Q. 랜덤 선물이 뭔가요?</Left3>
            <Right3>
              각자 어떤 선물인지 모르는 채로 나눠갖게 됩니다. 랜덤 선물 교환이죠! 때문에 포장 or 봉투에 담아 어떤
              선물인지 모르게 해주세요
            </Right3>

            <Left3>Q. 비밀 파뤼인가요?</Left3>
            <Right3>
              엄청난 비밀은 아니지만 모두에게 이야기하지는 말아주세요! 모두를 초대할 수 없기에 초대받지 못한 누군가가
              아쉬워할지도..
            </Right3>
          </Description3>
        </Inner>
      </InnerCard>
    </FullPageLayout>
  );
};
