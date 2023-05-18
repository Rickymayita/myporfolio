import React, { useRef } from 'react'
import Slider from "react-slick";
import Project from './Project';
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io'
import styled from 'styled-components';

let data = [
    {
        img: "https://i.imgur.com/pkiP62P.jpg",
        disc: "proyecto individual de una aplicación web que permita a los usuarios explorar y buscar info sobre los personajes de TV Rick and Morty usando la API pública"
    },
    {
        img: "https://i.imgur.com/E8ZTLMN.jpg",
        disc: "proyecto grupal de plataforma E-Learning con cursos gratuitos, pasarela de donaciones, asistente IA y dashboards personalizados para usuarios, docentes y administradores"
    },
    {
        img: "https://i.imgur.com/8WqKjpa.jpg",
        disc: "proyecto individual de página estática implementada en React, mostrando proyectos anteriores, habilidades técnicas y experiencia profesional."
    },
    {
        img: "https://i.imgur.com/pkiP62P.jpg",
        disc: "proyecto individual de una aplicación web que permita a los usuarios explorar y buscar info sobre los personajes de TV Rick and Morty usando la API pública"
    },
    {
        img: "https://i.imgur.com/E8ZTLMN.jpg",
        disc: "proyecto grupal de plataforma E-Learning con cursos gratuitos, pasarela de donaciones, asistente IA y dashboards personalizados para usuarios, docentes y administradores"
    },
    {
        img: "https://i.imgur.com/8WqKjpa.jpg",
        disc: "proyecto individual de página estática implementada en React, mostrando proyectos anteriores, habilidades técnicas y experiencia profesional."
    }
];

var settings = {
    className: "center",
    centerMode: true,
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    initialSlide: 0,
    arrows: false,
    responsive: [
        {
            breakpoint: 990,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 1,
                infinite: true,
                dots: false,
                centerMode: false,
            }
        },
        {
            breakpoint: 600,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
                initialSlide: 2,
                centerMode: false,
            }
        },
        {
            breakpoint: 480,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                centerMode: false,
            }
        }
    ]
};
const SliderComp = () => {
    const arrowRef = useRef(null);
    let sliderProjetc = "";
    sliderProjetc = data.map((item, i) => (
        <Project item={item} key={i} />
    ))
    return (
        <Container>
            <Slider ref={arrowRef} {...settings}>
                {sliderProjetc}
            </Slider>
            <Buttons>
                <button
                onClick={()=> arrowRef.current.slickPrev()}
                className='back'><IoIosArrowBack /></button>
                <button
                onClick={()=> arrowRef.current.slickNext()}
                className='next'><IoIosArrowForward /></button>
            </Buttons>
        </Container>
    )
}

export default SliderComp

const Container = styled.div`
    position: relative;
`

const Buttons = styled.div`
    button{
        width: 2rem;
        height: 2rem;
        background-color:rgba(255, 255, 255, 0.100);
        cursor: pointer;
        color: #0196be;
        border: none;
        position: absolute;
        top:45%;
        right: -1rem;
    }
    .back{
        left: -1rem;
    }
`