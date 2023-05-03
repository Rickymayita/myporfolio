import React, { useState } from 'react'
import styled from 'styled-components'
import { MdAlternateEmail } from 'react-icons/md'
import { CgProfile } from 'react-icons/cg'
import { HiOutlineMailOpen } from 'react-icons/hi'
import { AiFillGithub, AiFillLinkedin, AiOutlineArrowUp } from 'react-icons/ai'
import { BsInstagram, BsTwitter } from 'react-icons/bs'
import { FiMail, FiPhoneCall } from 'react-icons/fi'
import { Slide, Zoom, Fade } from 'react-awesome-reveal'
import emailjs from '@emailjs/browser'

const Footer = () => {
    const scrollUp = () => {
        window.scroll({
            top: 0,
            behavisor: "smooth"
        })
    }

    const [message, setMessage] = useState('')
    const [userName, setUserName] = useState('');
    const [userMail, setUserMail] = useState('');
    const [userMessage, setUserMessage] = useState('');
    const [nameError, setNameError] = useState('');
    const [emailError, setEmailError] = useState('');
    const [messageError, setMessageError] = useState('');

    const sendEmail = (event) => {
        event.preventDefault();

        if (!userName || !/^[a-zA-Z ]+$/.test(userName)) {
            setNameError('Por favor ingresa un nombre válido.');
            return;
        }
        setNameError('');
        if (!userMail || !/\S+@\S+\.\S+/.test(userMail)) {
            setEmailError('Por favor ingresa un email válido.');
            return;
        }
        setEmailError('');
        if (!userMessage) {
            setMessageError('Por favor ingresa un mensaje.');
            return;
        }
        setMessageError('');

        emailjs.sendForm('service_twkt77r', 'template_qvjr5r9', event.target, '7JTSqBjGyJqs1T_F6')
            .then(response => {
                console.log(response)
                setMessage('Gracias por escribirme, me pondré en contacto con vos a la brevedad')
                setUserName('')
                setUserMail('')
                setUserMessage('')
                event.target.reset()
            })
            .catch(error => console.log(error))
    }

    return (
        <Container>
            <Profile id='contactame'>
                <Slide direction='left' delay={1}><h1>Contactame</h1></Slide>
                <div className="address">
                    <Slide direction='left'><h1>Dirección:</h1></Slide>
                    <Slide><p>Urquiza 307, Apóstoles, Misiones, Argentina</p></Slide>
                    <div className="link">
                        <Slide direction='left'><h1>Contacto directo</h1></Slide>
                        <div>
                            <Slide direction='left'><span><FiPhoneCall /></span></Slide>
                            <Slide direction='left'><a href="tel:+5493758501161">+54 9 3578 50-1161</a></Slide>
                        </div>
                        <div>
                            <Slide direction='left'><span><HiOutlineMailOpen /></span></Slide>
                            <Slide><a href="mailto:mrickytech@gmail.com">mrickytech@gmail.com</a></Slide>
                        </div>
                    </div>
                </div>
                <div className="profiles">
                    <Slide direction='left'><h1>Mira mis redes</h1></Slide>
                    <div className="icons">
                        <Zoom><span><a href="https://github.com/Rickymayita" target="_blank"><AiFillGithub /></a></span></Zoom>
                        <Zoom><span><a href="https://www.linkedin.com/in/ricardomaya/" target="_blank"><AiFillLinkedin /></a></span></Zoom>
                        <Zoom><span><a href="https://www.instagram.com/mrickytech/" target="_blank"><BsInstagram /></a></span></Zoom>
                        <Zoom><span><a href="https://twitter.com/mrickytech" target="_blank"><BsTwitter /></a></span></Zoom>
                    </div>
                </div>
                <Fade><ArrowUp
                    onClick={scrollUp}
                ><AiOutlineArrowUp /></ArrowUp></Fade>

            </Profile>
            <Form>
                <Slide direction='right'>
                    <form onSubmit={sendEmail}>
                        <div className="name">
                            <span><CgProfile /></span>
                            <input type="text" name='userName' placeholder='Nombre Completo..'
                                value={userName} onChange={(e) => setUserName(e.target.value)} />
                            {nameError && <p className='error'>{nameError}</p>}
                        </div>
                        <div className="email">
                            <span><MdAlternateEmail /></span>
                            <input type="email" name='userMail' placeholder='Email..'
                                value={userMail} onChange={(e) => setUserMail(e.target.value)} />
                            {emailError && <p className='error'>{emailError}</p>}
                        </div>
                        <div className="message">
                            <span className='messageIcon'><FiMail /></span>
                            <textarea name='userMessage' cols="30" rows="10" placeholder='Deja tu mensaje..'
                                value={userMessage} onChange={(e) => setUserMessage(e.target.value)}></textarea>
                            {messageError && <p className='error'>{messageError}</p>}
                        </div>
                        <button>Enviar</button>
                    </form>
                    {message && <p className='mensajito'>{message}</p>}
                </Slide>
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

    @media(max-width:650px){
        flex-direction: column;
        gap: 3rem;
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
            @media(max-width:650px){
                width: 100%;
            }
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
    @media(max-width:650px){
        position: absolute;
        right: 3rem;
        top: 16rem;
    }

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

        .error{
            color: red;
        }

        button{
            width: 5rem;
            height: 1.8rem;
            background-color: #0196be;
            color: #fff;
            border: none;
            border-radius: 5px;
            filter: drop-shadow(0px 4px 5px #0196be);
            cursor: pointer;
            :hover{
                filter: drop-shadow(0px 6px 9px #0196be);
            }
        }
    }
    .mensajito{
        font-size: 1.3rem;
        color: #0196be;
        margin-top: 0.8rem;
    }
    
`