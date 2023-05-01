import React from 'react'
import styled from 'styled-components'
import SliderComp from '../Projects/Slider'
import { Zoom } from 'react-awesome-reveal'

const Projects = () => {
  return (
    <Container id='projet'>
      <Zoom>
        <h1>Proyectos <span className='blue'>Destacados</span></h1>
        <p>He desarrollado soluciones personalizadas y efectivas en línea, incluyendo aplicaciones web, plataformas de e-learning y mi propio sitio web de portafolio. Estos proyectos reflejan mi compromiso de crear soluciones innovadoras y eficaces para mis clientes.</p>
      </Zoom>
      <Slide>
        <SliderComp />
      </Slide>
    </Container>
  )
}

export default Projects


const Container = styled.div`
    width: 80%;
    max-width: 1280px;
    margin: 0 auto;
    padding: 3rem 0;
    text-align: center;
    @media(max-width:840){
      width: 90%;
    }
    h1{
      font-size: 1.9rem;
    }
    p{
      width: 28rem;
      margin: 0 auto;
      padding: 1rem 0;
      font-size: 0.9rem;
      @media(max-width: 500px){
        width: 90%;
      }
    }

`

const Slide = styled.div``