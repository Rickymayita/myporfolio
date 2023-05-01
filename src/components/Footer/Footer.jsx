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
        <Form>
            <form>
                <div className="name">
                    <span><CgProfile /></span>
                    <input type="text" placeholder='Nombre Completo..' />
                </div>
                <div className="email">
                    <span><MdAlternateEmail /></span>
                    <input type="email" placeholder='Email..' />
                </div>
                <div className="message">
                    <span className='messageIcon'><FiMail /></span>
                    <textarea cols="30" rows="10" placeholder='Deja tu mensaje..'></textarea>
                </div>
                <button>Enviar</button>
            </form>
        </Form>
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
    display: flex;
    justify-content: space-between;
    @media(max-width:840px){
        width: 90%;
    }
`

const Profile = styled.div`
    flex: 1;
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
                justify-content: center;
                background-color: #000;
                width: 2rem;
                height: 2rem;
                margin-right: 0.5rem;
                border-radius: 50px;

                :hover{
                    background-color: #0196be;
                }
                
                a{
                    margin-top: 0.2rem;
                    color: #fff;
                }
            }
        }
    }
`

const ArrowUp = styled.div`
    width: 2rem;
    height: 2rem;
    background-color: #0196be;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    font-size: 1.3rem;
    font-weight: 700;
    margin-top: 2rem;

`

const Form = styled.div`
    flex: 1;
    h1{
        font-size: 1.3rem;
        padding-bottom: 0.7rem;
    }

    form{
        background-color: #191923;
        padding: 0.8rem;
        border-radius: 5px;
        .name, .email, .message{
            display: flex;
            border: 1px solid gray;
            margin-bottom: 0.5rem;
            input, textarea{
                width: 100%;
                border: none;
                outline: none;
                color: #fff;
                background-color: transparent;
                padding: 1rem 0.5rem;
            }
            span{
                background-color: #0196be;
                width: 3rem;
                display: flex;
                align-items: center;
                justify-content: center;
            }
            .messageIcon{
                align-items: flex-start;
                padding-top: 0.5rem;
            }
        }

        button{
            width: 5rem;
            height: 1.8rem;
            background-color: #0196be;
            border: none;
            border-radius: 5px;
            filter: drop-shadow(0px 4px 5px #0196be);
            cursor: pointer;
            :hover{
                filter: drop-shadow(0px 6px 9px #0196be);
            }
        } 
    }
`