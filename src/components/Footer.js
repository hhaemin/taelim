import React from "react";
import styled from "styled-components";

const Footer = () => {
  return (
    <FooterContainer>
      <Content>
        <RightBox>
          <Logo>TAELIM</Logo>
          <Info>
            <span>대표자: 이성한</span>
            <span>tel: 031)764-7347</span>
            <span>FAX: 031)763-2539</span>
          </Info>
        </RightBox>
        <Info>
          <span>경기도 광주시 도척면 다람로 36번길(궁평리 668-1)65-71</span>
          {/* <span>우편번호 : 12810</span> */}
          <span>ⓒ 2017 TAELIM Co.,Ltd</span>
        </Info>
      </Content>
    </FooterContainer>
  );
};

const FooterContainer = styled.div`
  position: absolute;
  bottom: 0;
  height: 130px;
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

const RightBox = styled.div`
  display: flex;
  gap: 50px;
`;

const Info = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
`;

const Logo = styled.span`
  font-size: 40px;
  font-weight: 800;
  border-top: 10px solid red;
  border-bottom: 10px solid red;
`;

export default Footer;
