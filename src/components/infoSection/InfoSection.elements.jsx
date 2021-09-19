import styled from 'styled-components';

export const InfoSec = styled.div`
  color: #fff;
  padding: 160px 0px;
  background: ${({ lightBg }) => (lightBg ? '#fff' : '#101522')};
`;

export const InfoRow = styled.div`
  display: flex;
  align-items: center;
  flex-direction: ${({ imgStart }) => (imgStart ? 'row-reverse' : 'row')};
  flex-wrap: wrap;
  margin: 0 -15px -15px -15px;
`;
export const InfoColumn = styled.div`
  margin-bottom: 15px;
  padding: 15px;
  padding-top: 0px;
  flex: 1;
  max-width: 50%;
  flex-basis: 50%;

  @media (max-width: 768px) {
    display: flex;
    justify-content: center;
    max-width: 100%;
    flex-basis: 100%;
  }
`;

export const ImgWrapper = styled.div`
  max-width: 555px;
  display: flex;
  align-items: center;
  justify-content: ${({ start }) => (start ? 'flex-start' : 'flex-end')};
`;
export const Img = styled.img`
  padding-right: 0px;
  border: 0px;
  max-width: 100%;
  vertical-align: middle;
  display: inline-block;
  max-height: 500px;
`;

export const TextWrapper = styled.div`
  max-width: 540px;
  padding-top: 0px;
  padding-bottom: 60px;
  @media (max-width: 768px) {
    padding-bottom: 65px;
  }
`;

export const TopLine = styled.h6`
  font-size: 18px;
  line-height: 16px;
  letter-spacing: 1.4px;
  margin-bottom: 16px;
  color: ${({ lightTopLine }) => (lightTopLine ? '#a9b3c1' : '#4b59f7')};
`;
export const Heading = styled.h2`
  font-size: 48px;
  line-height: 1.1;
  color: ${({ lightText }) => (lightText ? '#f7f8fa' : '#1c2237')};
  margin-bottom: 24px;
`;
export const Subtitle = styled.span`
  display: inline-block;
  max-width: 440px;
  margin-bottom: 35px;
  font-size: 18px;
  line-height: 24px;
  color: ${({ lightTextDesc }) => (lightTextDesc ? '#a9b3c1' : '#1c2237')};
`;
