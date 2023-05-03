import React, { useState } from 'react'
import styled from 'styled-components'
import { FaLaptop } from 'react-icons/fa'

const Header = () => {
    const [bar, setBar] = useState(false);
    return (
        <Container bar={bar}>
            <Logo>
                <span className='blue'><FaLaptop /></span>
                <h1>Porfolio</h1>
            </Logo>
            <Nav bar={bar}>
                <span><a href="#home">Home</a></span>
                <span><a href="#skills">Skills</a></span>
                <span><a href="#projet">Proyectos</a></span>
                <span><a href="#develepers">Testimonios</a></span>
                <span><a href="#contactame">Contactame</a></span>
            </Nav>
            <div 
            onClick={() => setBar(!bar)}
            className="bars">
                <div className="bar"></div>
            </div>
        </Container>
    )
}

export default Header

const Container = styled.div`
display: flex;
align-items: center;
justify-content: space-between;
max-width: 1280px;
width: 80%;
margin: 0 auto;
padding: 1.5rem 0;
@media (max-width: 763px){
    width: 90%;
}
.bars{
    display: nome;
}
@media (max-width: 640px){
    .bars{
        width: 40px;
        height: 40px;
        position: relative;
        display: flex;
        justify-content: center;
        align-items: center;
        padding: 0.5rem;
        z-index: 100;
        .bar{
            position: absolute;
            width: 100%;
            height: 2px;
            background-color: ${props => props.bar ? "transparent" : "#fff"};            
            transition: all 400ms ease-in-out;
            :before, :after{
                position: absolute;
                content: '';
                width: 100%;
                height: 2px;
                background-color: #fff;
            }

            :before{
                transform: ${props => props.bar ? "rotate(45deg)" : "translatey(10px)" };
                transition: all 400ms ease-in-out;
            }
            
            :after{
                transform: ${props => props.bar ? "rotate(-45deg)" : "translatey(-10px)" };
                transition: all 400ms ease-in-out;
            }
        }
    }
}
`
const Logo = styled.div`
display: flex;
align-items: center;
gap: 0.5rem;
span{
    font-size: 1.8rem;
}

h1{
    font-weight: 600;
    font-size: 1.2rem;
}
`
const Nav = styled.div`
@media (max-width: 640px){
        position: fixed;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        background-color: #0196be;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
        font-size: 2rem;
        font-weight: 700;
        gap: 2rem;
        height: ${props => props.bar ? "100vh" : 0 };
        transition: height 400ms ease-in-out;
        overflow: hidden;
        z-index: 99;
}
span{
    margin-left: 1rem;
    a{
      color: #fff;
      font-weight: 400;
      position: relative;
      :before{
          content: '';
          position: absolute;
          left: 0;
          right: 0;
          bottom: -5px;
          height: 2px;
          background-color: #fff;
          transform: scale(0);
          transform-origin: right;
          transition: 400ms ease-in-out;
        }
        :hover:before{
          transform: scale(1);
          transform-origin: left;
        }
        :hover{
          opacity: 0.7;
        }
    }
  }
`