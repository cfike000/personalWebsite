import styled from "styled-components"
import React from "react"
import FadeIn from "react-fade-in/lib/FadeIn"
import { Link } from "react-router-dom"
import HomeIcon from "@mui/icons-material/Home"
import HistoryEduIcon from "@mui/icons-material/HistoryEdu"
import LocalLibraryIcon from "@mui/icons-material/LocalLibrary"
import EmailIcon from "@mui/icons-material/Email"
const Navbar = () => {
  return (
    <Container>
      <FadeIn transitionDuration={1250} from={top}>
        <Name>Carl Fike</Name>
      </FadeIn>
      <NavContainer>
        <HomeStyled>
          <HomeIcon />
          <StyledLink to="/">Home</StyledLink>
        </HomeStyled>
        <HomeStyled>
          <HistoryEduIcon />
          <StyledLink to="/projects">Projects</StyledLink>
        </HomeStyled>
        <HomeStyled>
          <LocalLibraryIcon />
          <StyledLink to="/experience">Experience</StyledLink>
        </HomeStyled>
        <HomeStyled>
          <EmailIcon />
          <StyledLink to="/contact">Contact</StyledLink>
        </HomeStyled>
      </NavContainer>
    </Container>
  )
}

export default Navbar

const Container = styled.div`
  height: 20vh;
  width: 100vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
`
const MainContainer = styled.div`
  height: 70vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
`

const Name = styled.div`
  color: white;
  padding-top: 0.2rem;
  height: 2vh;
  font-family: Roboto;
  font-weight: 700;
  font-size: 1.2rem;
  letter-spacing: 0.1rem;
  text-transform: uppercase;
`

const NavContainer = styled.div`
  border-radius: 5px;
  background-color: white;
  height: 50%;
  display: flex;
  width: 80%;
  justify-content: space-around;
  align-items: center;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  background-image: url("../src/assets/imgs/granite.png");
`

const HomeStyled = styled.div`
  display: flex;
  gap: 0.2rem;
  align-items: center;
`
const StyledLink = styled(Link)`
  color: inherit;
  text-decoration: none;
  text-transform: uppercase;
  font-size: 0.8rem;
  font-family: Roboto;
  font-weight: 500;
  position: relative;
  transition: transform 250ms;
  &:after {
    content: "";
    height: 2.5px;
    background: black;
    position: absolute;
    left: 0;
    right: 0;
    bottom: -6px;
    opacity: 0;
    transform: scaleX(0);
    transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
  }
  &:hover {
    color: #505050;
    transform: scaleX(0.98);
    &:after {
      transform: scaleX(1);
      opacity: 1;
    }
  }
`
