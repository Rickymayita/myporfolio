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
                <h1 className='blue'>Ricardo Ariel Maya</h1>
                <h3>Full Stack Developer</h3>
                <p>Soy un programador Full Stack apasionado por la creación de aplicaciones web de alta calidad. Tengo habilidades en HTML, CSS, JavaScript, React, Redux, Node.js, Express, Postgres, Sequelize, Figma y Scrum. Me mantengo actualizado con las últimas tecnologías y estoy comprometido a seguir aprendiendo y evolucionando para ofrecer soluciones innovadoras y eficientes. ¡Estoy emocionado de trabajar en nuevos proyectos y crear soluciones web de alta calidad!</p>
                <button>Let's talk</button>
                <Social>
                    <p>Check out my</p>
                    <div className='social-icons'>
                        <span><a href="https://www.linkedin.com/in/ricardomaya/" target="blank"><FaLinkedinIn /></a></span>
                        <span><a href="https://github.com/Rickymayita" target="blank"><FaGithub /></a></span>
                        <span><a href="https://www.instagram.com/mrickytech/" target="blank"><AiOutlineInstagram /></a></span>
                    </div>
                </Social>
            </Texts>
            <Profile>
                <img src="https://avatars.githubusercontent.com/u/93308674?v=4" alt="profile" />
            </Profile>
        </Container>
    )
}

export default ProfComponent

const Container = styled.div`
    display:flex;
    gap:2rem;
    padding-top: 2rem;
    width: 80%;
    max-width: 1280px;
    margin: 0 auto;
    @media(max-width: 840px){
        width: 90%;
    }
`

const Texts = styled.div`
    flex: 1;
    h4{
        padding:1rem 0;
        font-weight: 500;
    }
    h1{
        font-size: 2rem;
        font-family: 'Secular One', sans-serif;
        letter-spacing: 2px;
    }
    h3{
        font-weight: 500;
        font-size: 1.2rem;
        padding-bottom: 1.2rem;
        text-transform: capitalize;
    }
    p{
        font-weight: 300;
    }
    button{
        padding: 0.7rem 2rem;
        margin-top: 3rem;
        cursor: pointer;
        background-color: #0196be;
        border: none;
        color: #fff;
        font-weight: 500;
        filter: drop-shadow(0px 10px 10px #0194be);
        :hover{
            filter: drop-shadow(0px 10px 10px #0186be);

        }
    }
`

const Social = styled.div`
    margin-top: 3rem;
    display: flex;
    align-items: center;
    gap: 1rem;

    p{
        font-size: 0.9rem;
    }

    .social-icons{
        display: flex;
        align-items: center;
        gap: 1rem;
        span{
            width: 2.3rem;
            height: 2.3rem;
            clip-path: circle(50% at 50% 50%);
            background-color: #0196be;
            position: relative;
            transition: transform 400ms ease-in-out;
            :hover{
                transform: rotate(360deg);
            }
        }
        a{
            color: #fff;
            position: absolute;
            top: 30%;
            left: 30%;
            transform: traslate(-50%, -50%);
        }
    }
`

const Profile = styled.div`
    img{
        width: 25rem;
        filter: drop-shadow(0px 10px 10px #0186be);
        transition: transform 400ms ease-in-out;       
    }

    :hover img{
        transform: translateY(-10px);
    }
`