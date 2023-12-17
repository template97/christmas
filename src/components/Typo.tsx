import styled from 'styled-components';

export const Title = styled.div`
  font-size: 3.8rem;
  line-height: 3rem;
  font-weight: bold;
  color: #00690c;

  display: flex;
  flex-wrap: wrap;
  gap: 8px;
`;

export const Red = styled.div`
  color: #cf1f22;
`;
export const Description1 = styled.div`
  font-size: 1.5rem;
  color: #630903;
  line-height: 1.5rem;
  font-weight: bold;

  display: flex;
  flex-wrap: wrap;

  word-break: keep-all;
`;

export const Description2 = styled.div`
  line-height: 3rem;
  font-weight: bold;

  display: flex;
  flex-direction: column;
  align-items: stretch;

  gap: 6px;

  word-break: keep-all;

  margin-top: 32px;
`;

export const Left2 = styled.span`
  font-size: 2.5rem;
  color: grey;
`;

export const Right2 = styled.span`
  font-size: 2.5rem;
  align-self: flex-end;
  text-align: right;
  margin-left: auto;

  color: #363231;
`;
export const Description3 = styled.div`
  line-height: 1.2;
  font-weight: bold;
  color: #4f4f4f;

  display: flex;
  flex-direction: column;
  align-items: stretch;

  word-break: keep-all;

  margin-top: 60px;
`;

export const Left3 = styled.span`
  font-size: 1.6rem;
  margin-top: 18px;
`;

export const Right3 = styled.span`
  font-size: 1rem;
  margin-top: 6px;
  margin-left: 24px;
`;

export const Row = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  gap: 8px;

  justify-content: space-between;
`;
