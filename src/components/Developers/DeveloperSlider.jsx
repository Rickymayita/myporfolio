import React from 'react'
import styled from 'styled-components'
import {IoIosQuote} from 'react-icons/io'
import {AiFillStar} from 'react-icons/ai'

const DeveloperSlider = (props) => {
    const {name, position, img_url, start, disc} = props.item
  return (
    <Container>
        <Header>
            <span><IoIosQuote /></span>
            <span>
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

const Container = styled.div``

const Header = styled.div``

const Body = styled.p``

const Footer = styled.div``