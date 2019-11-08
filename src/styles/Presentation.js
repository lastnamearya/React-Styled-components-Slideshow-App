import styled from 'styled-components';

export const AppWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  #logo {
    width: 100px;
    margin-top: 40px;
    margin-bottom: 15px;
  }

  iframe {
    margin-left: 70px;
  }
`;

export const PresentationWrapper = styled.div`
  background: #fff;
  min-height: 78vh;
  max-height: auto;
  width: 90%;
  margin: 50px 5% 100px;
  box-shadow: rgba(17, 16, 34, 0.4) 0px 12px 34px 1px;
  border-radius: 40px;
  display: flex;
  flex-direction: column;
  overflow-x: hidden;
`;

export const SlidesNavigationSection = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  margin-left: 100px;
`;

export const AboutMe = styled.div`
  width: 300px;
  height: 420px;
  box-shadow: rgba(17, 16, 34, 0.2) 0px 16px 34px 1px;
  margin-top: 20px;
  border-radius: 30px;
  position: absolute;
  background: linear-gradient(50deg, #ff9a93, #fad0c4);
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  padding: 50px;

  img {
    width: 90px;
    height: 90px;
    border-radius: 50%;
  }
`;

export const SlidesWrapper = styled.div`
  overflow: auto;
  margin-left: 400px;

  ::-webkit-scrollbar {
    height: 12px;
    border-radius: 30px;
    background-color: #fad0c4;
  }

  ::-webkit-scrollbar-thumb {
    background: #cc6a87;
    border-radius: 80px;
    width: 300px;
  }
`;

export const SlidesDiv = styled.div`
  display: flex;
  margin-top: 60px;
  min-width: 1500px;
  max-width: auto;
  height: auto;
  padding: 2rem;
  z-index: 100;
`;

export const Slide = styled.div`
  box-shadow: rgba(17, 16, 34, 0.2) 0px 16px 34px 1px;
  border-radius: 30px;
  width: 300px;
  margin-right: -120px;
  height: 400px;
  background: #fff;
  cursor: pointer;
  transition: 0.2s;

  :hover {
    margin-right: -20px;
    margin-top: -30px;
    width: 320px;
  }
`;
