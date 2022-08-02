import React from "react"

import styled from "styled-components"
const Home = () => {
  return (
    <MainContainer>
      <Card></Card>
    </MainContainer>
  )
}

export default Home

const MainContainer = styled.div`
  height: 70vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
`

const Card = styled.div`
  border-radius: 20px;
  height: 80%;
  width: 80%;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  background-image: url("../src/assets/imgs/granite.png");
`
