import React from 'react'
import styled from 'styled-components'
import Section from './Section'

function Home() {
    return (
        <Container>
            <Section
              title= "Model S"
              description= "Order Online for Touchless Delivery"
              background-image= "model-s.jpg"
              leftBtnText="Custom order"
              rightBtnText="Existing inventory"
            />
            
        </Container>
    )
}

export default Home
const Container = styled.div`
  height : 100vh;
`
