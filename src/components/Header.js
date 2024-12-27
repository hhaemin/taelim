import React from "react";
import styled from "styled-components";
import Navbar from "./NavigationBar";

const Header = () => {
  return (
    <HeaderContainer>
      <Navbar />
    </HeaderContainer>
  );
};

const HeaderContainer = styled.div`
  display: flex;
  align-items: center;
  background: white;
`;

export default Header;
