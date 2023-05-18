import React from 'react'
import styled from 'styled-components'
import Card from './Card';
import { IoLogoJavascript } from "react-icons/io";
import { SiRedux } from "react-icons/si";
import { DiPhotoshop } from "react-icons/di";
import { Slide, Zoom } from 'react-awesome-reveal';

const Skills = () => {
    return (
        <Container id='skills'>
            <Slide direction='down'>
                <h4>Mi Top de <span className="blue">Habilidades</span></h4>
                <h1>Lo que hago</h1>
            </Slide>
            <Cards>
                <Slide direction='left'>
                    <Card
                        Icon={IoLogoJavascript}
                        title={'Front'}
                        disc={'¡Estoy listo para llevar tus proyectos al siguiente nivel! Con habilidades avanzadas en JavaScript y experiencia en el desarrollo front-end utilizando React, puedo crear interfaces de usuario altamente funcionales y visualmente atractivas. Además, tengo un sólido conocimiento de HTML y CSS, lo que me permite crear páginas web de alta calidad. ¡Déjame ayudarte a crear una experiencia en línea impresionante para tus usuarios!'}
                    />
                </Slide>
                <Zoom>
                    <Card
                        Icon={SiRedux}
                        title={'Back'}
                        disc={'¡Estoy emocionado de trabajar en el desarrollo back-end de tus proyectos! Con experiencia en el manejo de Redux, puedo crear aplicaciones web escalables y de alta calidad. Además, tengo un sólido conocimiento en SQL y Node.js, lo que me permite crear una base de datos segura y una conexión eficiente entre el front-end y el back-end. ¡Permíteme ayudarte a construir una plataforma sólida y funcional para tus usuarios!'}
                    />
                </Zoom>
                <Slide direction='right'>
                    <Card
                        Icon={DiPhotoshop}
                        title={'Desing'}
                        disc={'!"Como diseñador gráfico con gran manejo de Illustrator, puedo crear diseños visualmente impactantes y atractivos para tus proyectos. Además, estoy familiarizado con Photoshop y Figma, lo que me permite crear diseños desde el concepto hasta la entrega final. ¡Permíteme ayudarte a crear una identidad visual impresionante y efectiva para tu marca o proyecto!'}
                    />
                </Slide>
            </Cards>
        </Container>
    )
}

export default Skills

const Container = styled.div`
    width: 80%;
    max-width: 1280px;
    margin: 0 auto;
    padding: 3rem 0;
    @media(max-width: 840px){
        width: 90%;
    }
    
    h1{
        padding-top: 1rem;
    }
`
const Cards = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    margin-top: 4rem;
    gap: 1rem;
`