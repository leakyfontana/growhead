import * as React from "react";
import type { HeadFC, PageProps } from "gatsby";
import styled from "styled-components";
import getBackgroundURL from "../helpers/getBackgroundURL";
import { Texture } from "../enums";

const Wrapper = styled.section`
  margin: .5em;
  background: rgb(248, 248, 248);
  background: radial-gradient(
    circle,
    rgba(248, 248, 248, 1) 0%,
    rgba(156, 172, 179, 1) 100%
  );
  filter: drop-shadow(5px 5px 4px #a7aaa9);
  border-radius: 4px;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const FlexRow = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  margin-left: -80px;
`;

const ButtonBar = styled.div`
  display: flex;
  flex-direction: row;
  padding-top: 2em;
`;

const Logo = styled.img`
  width: 130px;
  height: 100px;
`;

//Button Clip Paths made with:
// https://bennettfeely.com/clippy/

// Pallette Options:
// - #4b2c74
// - #e9e3ef
// - #060f09
// - #108144
// - #8d7fa0
// - #a19eaa
// - #a493bc
// - #1b5a3c
// - #74599c

// Button background patterns from:
// https://heropatterns.com/

const Button1 = styled.button`
  color: #ffffff;
  font-size: 2em;
  padding-top: 1em;
  background-color: #4b2c74;
  // Pattern: Topography
  background-image: url("${getBackgroundURL(Texture.Topography)}");
  width: 200px;
  height: 100px;
  //clip-path: polygon(1% 70%, 86% 49%, 98% 100%, 5% 100%);
  clip-path: polygon(3% 38%, 89% 0, 100% 100%, 5% 100%);
  margin-right: -22.5px;
  z-index: 0;
  cursor: pointer;
  border: none;

  :hover {
    z-index: 5;
  }
`;

const Button2 = styled.button`
  color: #ffffff;
  font-size: 2em;
  padding-top: 1em;
  background-color: #a19eaa;
  //Pattern: Parkay Floor
  background-image: url("${getBackgroundURL(Texture.ParkayFloor)}");
  width: 200px;
  height: 100px;
  //clip-path: polygon(17% 64%, 82% 61%, 98% 100%, 5% 100%);
  clip-path: polygon(13% 21%, 88% 14%, 100% 100%, 0 100%);
  margin-right: -22.5px;
  z-index: 1;
  cursor: pointer;
  border: none;

  :hover {
    z-index: 5;
  }
`;

const Button3 = styled.button`
  color: #ffffff;
  font-size: 2em;
  padding-top: 1em;
  background-color: #108144;
  //Patern: Clouds
  background-image: url("${getBackgroundURL(Texture.Clouds)}");
  width: 200px;
  height: 100px;
  //clip-path: polygon(8% 54%, 97% 61%, 95% 100%, 5% 100%);
  clip-path: polygon(5% 6%, 99% 31%, 100% 100%, 0 100%);
  margin-right: -22.5px;
  z-index: 2;
  cursor: pointer;
  border: none;

  :hover {
    z-index: 5;
  }
`;

const Button4 = styled.button`
  color: #ffffff;
  font-size: 2em;
  padding-top: 1em;
  background-color: #8d7fa0;
  //Pattern: Eyes
  background-image: url("${getBackgroundURL(Texture.Eyes)}");
  width: 200px;
  height: 100px;
  //clip-path: polygon(8% 67%, 85% 47%, 99% 100%, 8% 100%);
  clip-path: polygon(0 50%, 88% 13%, 100% 100%, 0 100%);
  margin-right: -22.5px;
  z-index: 3;
  cursor: pointer;
  border: none;

  :hover {
    z-index: 5;
  }
`;

const TickerContainer = styled.div`
  width: 100%;
  height: 86px;
  background-color: #3A3C3B;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

const LeftArrow = styled.button`
  background-color: #050505;
  height: 80px;
  width: 15%;
  clip-path: polygon(0 50%, 10% 100%, 10% 80%, 100% 80%, 95% 50%, 100% 20%, 10% 20%, 10% 0);
`;

const RightArrow = styled.button`
  background-color: #050505;
  height: 80px;
  width: 15%;
  clip-path: polygon(100% 50%, 90% 100%, 90% 80%, 0 80%, 5% 50%, 0 20%, 90% 20%, 90% 0);
`;

const Ticker = styled.div`
  height: 50px;
  width: 50%;
  background-color: #050505;
  clip-path: polygon(5% 0, 0 50%, 5% 100%, 95% 100%, 100% 50%, 95% 0);
`;

const IndexPage: React.FC<PageProps> = () => {
  return (
    <main>
      <Wrapper>
        <FlexRow>
          <Logo src="/images/GrowHeadLogo.png" />
          <ButtonBar>
            <Button1>HOME</Button1>
            <Button2>STORE</Button2>
            <Button3>BLOG</Button3>
            <Button4>ABOUT</Button4>
          </ButtonBar>
        </FlexRow>
        <TickerContainer>
          <LeftArrow />
          <Ticker />
          <RightArrow />
        </TickerContainer>
      </Wrapper>
    </main>
  );
};

export default IndexPage;

export const Head: HeadFC = () => <title>Growhead | Home</title>;
