import styled, { css } from 'styled-components';

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
  width: 85%;
  margin: 50px 7.5% 100px;
  box-shadow: rgba(17, 16, 34, 0.4) 0px 12px 34px 1px;
  border-radius: 40px;
  display: flex;
  flex-direction: column;
  overflow-x: hidden;
`;

export const ActiveSlideWrapper = styled.div`
  margin: 50px 50px;
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
  padding: 50px 20px 0px;
  color: #fff;
  text-align: center;

  img {
    width: 85px;
    height: 85px;
    border-radius: 50%;
    box-shadow: rgba(17, 16, 34, 0.2) 0px 12px 34px 1px;
  }

  h3 {
    margin-bottom: 10px;
    color: #db718f;
  }

  h4 {
    margin: 0;
    line-height: 22px;
  }
`;

export const SocialSection = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 120px;

  p {
    width: 40px;
    height: 40px;
    border-radius: 50%;
    box-shadow: rgba(17, 16, 34, 0.15) 0px 10px 34px 1px;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    opacity: 0.7;
    margin-right: 10px;

    :hover {
      opacity: 1;
    }
  }

  svg {
    font-size: 20px;
    color: #fff !important;
  }
`;

export const SlidesWrapper = styled.div`
  overflow: auto;
  margin-left: 300px;

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
  min-width: 2300px;
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
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
  padding: 30px 30px 25px;

  p {
    margin: 0;
    font-size: 1.2rem;
    font-weight: 500;
    margin: 0;
    color: #6e6e6e;
  }

  :hover {
    margin-right: -40px;
    margin-top: -30px;
    width: 320px;
  }

  ${'' /* Active Slide */}

  ${({ active }) =>
    active &&
    css`
      margin-right: -40px;
      margin-top: -30px;
      width: 320px;
      background: linear-gradient(50deg, #ff9a93, #fad0c4);

      p {
        color: #fff !important;
      }
    `};

  footer {
    display: flex;
    align-items: center;
    justify-content: flex-start;

    p {
      font-size: 1rem !important;
      font-weight: 500 !important;
    }
  }
`;

export const SlideTopic = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  text-align: left;
  margin-top: -60px;
  padding-right: 40px;

  h2 {
    color: #cc6a87;
    font-size: 1.5rem;
    font-weight: 700;
    margin-bottom: 25px;
  }

  img {
    width: 90px;
    margin-left: 80px;
  }
`;

export const FootPrint = styled.img`
  width: 35px;
  height: 35px;
  border-radius: 50%;
  margin-right: 8px;
`;

// Welcome First Slide

export const WelcomeWrapper = styled.div`
  text-align: center;

  h1 {
    margin: 0px;
  }

  p {
    margin-top: 10px;
  }
`;

export const WelcomeDiv = styled.div`
  display: flex;
  justify-content: center;
  height: 300px;
  margin-top: 50px;
`;

export const TeamMember = styled.img`
  width: 130px;
  height: 130px;
  border-radius: 50%;
  margin-right: 20px;
  cursor: pointer;
  align-self: ${({ index }) => (index % 2 === 0 ? 'flex-start' : 'flex-end')};
  box-shadow: 0 0 20px 5px rgba(0, 0, 0, 0.2);

  :hover {
    transform: scale(1.1);
  }
`;

// *************************************************** //

// Active Slide ~ Showcase
