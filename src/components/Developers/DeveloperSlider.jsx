import React from 'react'
import styled from 'styled-components'
import { IoIosQuote } from 'react-icons/io'
import { AiFillStar, AiFillGithub, AiFillLinkedin } from 'react-icons/ai'

const DeveloperSlider = (props) => {
    const { name, position, img_url, stars, disc, linkedin, github } = props.item
    return (
        <Container>
            <Header>
                <span className='quote'><IoIosQuote /></span>
                <div className="stars">
                {Array(stars).fill().map((_, i) => (
                    <span className="star" key={i}>
                        <AiFillStar />
                    </span>
                ))}
                </div>
            </Header>
            <Body>
                {disc}
            </Body>
            <Footer>
                <img src={img_url} alt={name} />
                <div className="details">
                    <h1>{name}</h1>
                    <p>{position}</p>
                </div>
                <div className="socials">
                <span><a href={github} target="_blank" rel="noreferrer noopener"><AiFillGithub /></a></span>
                <span><a href={linkedin} target="_blank" rel="noreferrer noopener"><AiFillLinkedin /></a></span>
                </div>
            </Footer>
        </Container>
    )
}

export default DeveloperSlider

const Container = styled.div`
    background: linear-gradient(159deg, rgb(45, 45, 58) 0%, rgb(43,43,53) 100%);
    padding: 1.5rem 1rem;
    margin: 0 1rem;
`

const Header = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    .quote{
        font-size: 3rem;
        color: #0196be;
        opacity: 0.7;
    }

    .stats{
        display: flex;
    }

    .star{
        color: #ffcd3c;
        font-size: 1.3rem;
    }
`

const Body = styled.p`
    font-size: 0.8rem;
    margin-bottom: 1.5rem;
`

const Footer = styled.div`
    display: flex;
    align-items: center;
    gap: 1rem;
    img{
        width: 4rem;
        height: 4rem;
        border-radius: 50%;
        object-fit: cover;

    }

    h1{
        font-size: 1.2rem;
        font-weight: 700;
        @media(max-width:580px){
            font-size: 1rem;
        }
        @media(max-width:538px){
            font-size: 0.9rem;
        }
    }

    p{
        font-size: 0.8rem;
        color: rgba(255, 255, 255, 0.500);
        @media(max-width:538px){
            font-size: 0.6rem;
        }
    }
    .socials{
        display: flex;
        flex-direction: column;

        a{
            font-size: 1.8rem;
            color: #0196be;
        }
    }
`