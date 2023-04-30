import React from 'react'
import styled from 'styled-components'
import {MdAlternateEmail} from 'react-icons/md'
import {CgProfile} from 'react-icons/cg'
import {HiOutlineMailOpen} from 'react-icons/hi'
import {AiFillGithub, AiFillLinkedin, AiOutlineArrowUp} from 'react-icons/ai'
import {BsInstagram, BsTwitter} from 'react-icons/bs'
import {FiMail, FiPhoneCall} from 'react-icons/fi'

const Footer = () => {
  return (
    <Container>
        <Profile>
            <h1>Porfolio</h1>
            <div className="address">
                <h1>Dirección:</h1>
                <p>Urquiza 307, Apóstoles, Misiones, Argentina</p>
                <div className="link">
                    <h1>Contacto directo</h1>
                    <div>
                        <span><FiPhoneCall /></span>
                        <a href="tel:+5493758501161">+54 9 3578 50-1161</a>
                    </div>
                    <div>
                        <span><HiOutlineMailOpen /></span>
                        <a href="mailto:mrickytech@gmail.com">mrickytech@gmail.com</a>
                    </div>
                </div>
            </div>
            <div className="profiles">
                <h1>Mira mis redes</h1>
                <div className="icons">
                    <span><a href="#" target="_blank"><AiFillGithub /></a></span>
                    <span><a href="#" target="_blank"><AiFillLinkedin /></a></span>
                    <span><a href="#" target="_blank"><BsInstagram /></a></span>
                    <span><a href="#" target="_blank"><BsTwitter /></a></span>
                </div>
            </div>
            <ArrowUp><AiOutlineArrowUp /></ArrowUp>
        </Profile>
        <Form></Form>
    </Container>
  )
}

export default Footer

const Container = styled.div`
    margin-top: 2rem;
    position: relative;
    padding: 2rem 0;
    width: 80%;
    max-width:1280px;
    margin: 0 auto;
    @media(max-width:840px){
        width: 90%;
    }
`

const Profile = styled.div`
    .address{
        padding: 1rem 0;
        h1{
            font-size: 1.2rem;
        }

        p{
            width: 60%;
            paddin: 0.5rem;
        }

        .link{
            h1{
                font-size: 1.2rem;
                margin-bottom: 0.5rem;
            }

            div{
                display: flex;
                align-items: center;
                gap: 0.5rem;
                a{
                    text-decoration: none;
                    color: lightgray;
                    :hover{
                        color: #0196be;
                    }
                }
            }
        }

        .profiles{
            h1{                
                font-size: 1.2rem;
                padding: 1rem 0;
            }

            .icons{
                display: flex;
                align-items: center;
    
                span{
                    display: flex;
                    align-items: center;
                    background-color: #000;            
                }
            }
        }

    }
`

const ArrowUp = styled.div``

const Form = styled.div``