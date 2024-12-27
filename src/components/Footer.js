import React from "react";
import styled from "styled-components";

const Footer = () => {
  return (
    <FooterContainer>
      <Content>
        <Logo>TAELIM</Logo>
        <Location>
          <span>경기도 광주시 도척면 다람로 36번길(궁평리 668-1)65-71</span>
          <span>ⓒ 2017 TAELIM Co.,Ltd</span>
        </Location>
      </Content>
    </FooterContainer>
  );
};

const FooterContainer = styled.div`
  position: absolute;
  bottom: 0;
  height: 150px;
  background: #ddd;
  width: 100vw;
  display: flex;
`;

const Content = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-left: 250px;
  margin-right: 250px;
`;

const Logo = styled.span`
  font-size: 40px;
  font-weight: 800;
  border-top: 10px solid red;
  border-bottom: 10px solid red;
`;

const Location = styled.div`
  display: flex;
  flex-direction: column;
`;

export default Footer;
