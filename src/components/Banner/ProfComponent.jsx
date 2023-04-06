import React from 'react'
import styled from 'styled-components'
import { FaLinkedinIn } from 'react-icons/fa'
import { FaGithub } from 'react-icons/fa'
import { AiOutlineInstagram } from 'react-icons/ai'

const ProfComponent = () => {
  return (
    <Container>
        <Texts>
            <h4>Hello <span >I'm</span></h4>
            <h1>Ricardo Ariel Maya</h1>
            <h3>Full Stack Developer</h3>
            <p>Soy un programador Full Stack apasionado por la creación de aplicaciones web de alta calidad. Tengo habilidades en HTML, CSS, JavaScript, React, Redux, Node.js, Express, Postgres, Sequelize, Figma y Scrum. Me mantengo actualizado con las últimas tecnologías y estoy comprometido a seguir aprendiendo y evolucionando para ofrecer soluciones innovadoras y eficientes. ¡Estoy emocionado de trabajar en nuevos proyectos y crear soluciones web de alta calidad!</p>
            <button>Let's talk</button>
            <Social>
                <p>Check out my</p>
                <div className='social-icons'>
                    <span><a href="#"><FaLinkedinIn /></a></span>
                    <span><a href="#"><FaGithub /></a></span>
                    <span><a href="#"><AiOutlineInstagram /></a></span>
                </div>
            </Social>
        </Texts>
    </Container>
  )
}

export default ProfComponent

const Container = styled.div``
const Texts = styled.div``
const Social = styled.div``