import styled from 'styled-components';

export const PresentationWrapper = styled.div`
  background: #fff;
  min-height: 78vh;
  max-height: auto;
  width: 90%;
  margin: 5%;
  box-shadow: rgba(17, 16, 34, 0.4) 0px 12px 34px 1px;
  border-radius: 40px;
  display: flex;
  flex-direction: column;
  overflow-x: hidden;
`;

export const SlidesWrapper = styled.div`
  overflow: auto;
  margin-left: 100px;
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
