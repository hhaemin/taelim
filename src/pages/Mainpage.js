import React from "react";
import Header from "../components/Header";
import Banner from "../components/Banner";
import styled from "styled-components";
import Footer from "../components/Footer";

const Mainpage = () => {
  return (
    <Container>
      <Header />
      <Banner />
      <Footer />
    </Container>
  );
};

const Container = styled.div`
  width: 100vw;
  display: flex;
  justify-content: center;
  flex-direction: column;
`;

export default Mainpage;
