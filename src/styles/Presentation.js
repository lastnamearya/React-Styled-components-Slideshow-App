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
  margin: 40px 5% 100px;
  box-shadow: rgba(17, 16, 34, 0.4) 0px 12px 34px 1px;
  border-radius: 40px;
  display: flex;
  flex-direction: column;
  overflow-x: hidden;
`;

export const SlidesWrapper = styled.div`
  overflow: auto;
  margin-left: 100px;

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
  min-width: 2200px;
  max-width: auto;
  height: auto;
  padding: 2rem;
  z-index: 100;
`;

export const Slide = styled.div`
  box-shadow: rgba(17, 16, 34, 0.2) 0px 12px 34px 1px;
  border-radius: 30px;
  width: 290px !important;
  margin-right: 30px;
  height: 350px;
`;
