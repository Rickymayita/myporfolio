import React from 'react'
import styled from 'styled-components'
import { FaLaptop } from 'react-icons/fa'

const Header = () => {
    return (
        <Container>
            <Logo>
                <span className='green'><FaLaptop /></span>
                <h1>Porfolio</h1>
            </Logo>
            <Nav>
                <span><a href="#">Home</a></span>
                <span><a href="#">Services</a></span>
                <span><a href="#">Proyects</a></span>
                <span><a href="#">Testimonials</a></span>
                <span><a href="#">Porfolio</a></span>
            </Nav>
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