import React from "react"
import styled from "styled-components"
import GitHubIcon from "@mui/icons-material/GitHub"
import LinkedInIcon from "@mui/icons-material/LinkedIn"
import TwitterIcon from "@mui/icons-material/Twitter"
const Footer = () => {
  return (
    <Container>
      <StyledFooter>
        <Links>
          <CustomLink href="www.gmail.com">
            <GitHubIcon />
          </CustomLink>
          <CustomLink href="">
            <LinkedInIcon />
          </CustomLink>
          <CustomLink href="">
            <TwitterIcon />
          </CustomLink>
        </Links>
      </StyledFooter>
    </Container>
  )
}

export default Footer

const Container = styled.div`
  height: 10vh;
  width: 100vw;

  display: flex;
  align-items: center;
  justify-content: center;
`

const StyledFooter = styled.div`
  border-top-right-radius: 5px;
  border-top-left-radius: 5px;
  background-color: white;
  height: 100%;
  width: 50%;
  margin-top: 3rem;
`

const Links = styled.div`
  margin-top: 0.5rem;
  display: flex;
  align-items: center;
  justify-content: space-around;
`

const CustomLink = styled.a`
  text-decoration: none;
  color: black;
`
