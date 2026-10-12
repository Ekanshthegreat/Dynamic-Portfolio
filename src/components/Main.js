import React from "react";
import { Container, useMediaQuery, styled, useTheme } from "@mui/material";
import avatar from "../assets/ekansh.jpg";
import Navbar from "./Navbar";
import SideAnchorLinks from "./SideAnchorLinks";
import Hero from "./sections/Hero";
import About from "./sections/About";
import Experience from "./sections/Experience";
import Projects from "./sections/Projects";
import ResearchSection from "./sections/Research";
import Hobbies from "./sections/Hobbies";
import Footer from "./sections/Footer";
const MainPage = styled("main")(({ theme }) => ({
  backgroundColor: theme.palette.background.main,
  color: theme.palette.textMain.main,
  overflow: "hidden",
}));
const MainContainer = styled(Container)({ maxWidth: "1600px" });
export default function Main() {
  const theme = useTheme();
  const showSideAnchor = useMediaQuery(theme.breakpoints.up("lg"));
  return (
    <>
      <Navbar />
      <MainPage id="main-content" tabIndex={-1}>
        {showSideAnchor && <SideAnchorLinks />}
        <MainContainer>
          <Hero img={avatar} />
          <About />
          <Experience />
          <ResearchSection />
          <Projects />
          <Hobbies />
          <Footer />
        </MainContainer>
      </MainPage>
    </>
  );
}
