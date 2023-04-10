import React from 'react'
import styled from 'styled-components'
import Card from './Card';
import { IoLogoJavascript } from "react-icons/io";
import { AiOutlineHtml5 } from "react-icons/ai";
import { ImCss3 } from "react-icons/im";
import { IoLogoNodejs } from "react-icons/io";
import { IoLogoReact } from "react-icons/io5";
import { SiRedux } from "react-icons/si";
import { TbSql } from "react-icons/tb";
import { DiPhotoshop } from "react-icons/di";
import { DiIllustrator } from "react-icons/di";

const Skills = () => {
  return (
    <Container>
        <h4>My Top <span className="blue">Skill</span></h4>
        <h1>What I Do?</h1>
        <Cards>
            <Card 
            Icon={IoLogoJavascript}
            title={ 'Font' }
            disc={'Lorem'}
            />
            <Card 
            Icon={ IoLogoReact }
            title={'Back'}
            disc={'Lorem'}
            />
            <Card 
            Icon={DiPhotoshop}
            title={'Desing'}
            disc={'Lorem'}
            />
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
    
    h1{
        padding-top: 1rem;
    }
`
const Cards = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    margin-top: 4rem;
`