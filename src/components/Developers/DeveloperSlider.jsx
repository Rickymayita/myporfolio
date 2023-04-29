import React from 'react'
import styled from 'styled-components'
import {IoIosQuote} from 'react-icons/io'
import {AiFillStar} from 'react-icons/ai'

const DeveloperSlider = (props) => {
    const {name, position, img_url, start, disc} = props.item
  return (
    <Container>
        <Header>
            <span className='quote'><IoIosQuote /></span>
            <span className='star'>
                <AiFillStar />
                <AiFillStar />
                <AiFillStar />
                <AiFillStar />
                <AiFillStar />
            </span>
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
        </Footer>
    </Container>
  )
}

export default DeveloperSlider

const Container = styled.div`
    background: linear-gradient(159deg, rgb(45, 45, 58) 0%, rgb(43,43,53) 100%);
    padding: 0.5rem 1rem 1rem 1rem;
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

    .star{
        color: #ffcd3c;
        font-size: 1.3rem;
    }
`

const Body = styled.p``

const Footer = styled.div``