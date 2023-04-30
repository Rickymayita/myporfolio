import React, { useRef } from 'react'
import styled from 'styled-components'
import Slider from "react-slick";
import DeveloperSlider from './DeveloperSlider';
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io'

let developers =[
    {
        name: "Mauro Moyano",
        position: "Developer",
        img_url:"https://i.imgur.com/zVuA1Sp.jpg",
        stars: 4,
        disc: "He tenido la dicha de poder contar con Ricardo como compañero porque siempre ha encontrado las soluciones mas creativas a los problemas mas insólitos. un gran trabajador en equipo."
    },
    {
        name: "Lautario Garcia",
        position: "Developer",
        img_url:"https://i.imgur.com/Ey3XQOy.jpg",
        stars: 4,
        disc: "Agradezco haberlo llegado a conocer, fue un gran compañero durante la cursada y ahora tras haberla terminado. Aportó muchas ideas y conocimientos al grupo y siempre colaboró para ayudar a la comunidad que fue formando."
    },
    {
        name: "Ezequiel Lescano",
        position: "Developer",
        img_url:"https://i.imgur.com/X4PYacf.jpg",
        stars: 5,
        disc: "Tuve el agrado de ser parte de Team de TA's de SoyHenry  con Ricardo, además de la cursada y encontré no sólo un compañero solidario, Si no también una persona perseverante y trabajadora, que busca superarse siempre."
    },
    {
        name: "Guillermo Rodriguez",
        position: "Developer",
        img_url:"https://i.imgur.com/6wZYQKa.jpg",
        stars: 4,
        disc: "Fue una gran experiencia compartir con Ricardo el tiempo en el team de TA y colaborar junto a él la creación de CapaciTech Kids, aprender de él y tener la oportunidad de aportar el proyecto final en SoyHenry."
    },
    {
        name: "Brandom Reyes",
        position: "Developer",
        img_url:"https://i.imgur.com/CgJaDpk.jpg",
        stars: 4,
        disc: "He tenido la dicha de poder contar con Ricardo como compañero porque siempre ha encontrado las soluciones mas creativas a los problemas mas insólitos. un gran trabajador en equipo."
    },
    {
        name: "Abigail Cortés",
        position: "Developer",
        img_url:"https://i.imgur.com/BGgQp0J.jpg",
        stars: 4,
        disc: "He tenido la dicha de poder contar con Ricardo como compañero porque siempre ha encontrado las soluciones mas creativas a los problemas mas insólitos. un gran trabajador en equipo."
    },
]

var settings = {
    dots: true,
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
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 2
        }
      },
      {
        breakpoint: 530,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

const Developers = () => {
    const arrowRef = useRef(null);
    let developersDisc = "";
    developersDisc = developers.map((item, i)=> (
        <DeveloperSlider item={item} key = {i} />
        ))
  return (
    <Container>
        <span className="blue">Testimonios</span>
        <h1>Que dicen mis colegas?</h1>
        <Testimonios>
            <Slider ref={arrowRef} {...settings}>
                {developersDisc}
            </Slider>
            <Buttons>
              <button
                onClick={() => arrowRef.current.slickPrev()}
              ><IoIosArrowBack /></button>
              <button
              onClick={() => arrowRef.current.slickNext()}
              ><IoIosArrowForward /></button>
            </Buttons>
        </Testimonios>
    </Container>
  )
}

export default Developers

const Container = styled.div`
    width: 80%;
    max-width: 1280px;
    margin: 0 auto;
    padding: 4rem 0;

    @media(max-width:840px){
      width: 90%;
    }

    span{
        font-weight: 700;
        text-transform: uppercase;
    }

    h1{
        padding-top: 1rem;
        text-transform: capitalize;
    }

    .slick-list, .slick-slider, .silck-track{
      padding: 0;
    }

    .slick-dots{
      text-align: left;
      margin-left: 1rem;
    }

    .slick-dots li button:before{
      content: "";
    }

    .slick-dots li button{
      width: 9px;
      height: 4px;
      background: linear-gradient(159deg, rgb(45, 45, 58) 0%, rgb(43,43,53) 100%);
      padding: 0.1rem;
      margin-top: 1rem;
      transition: all 400ms ease-in-out;
      border-radius: 50px;
    }

    .slick-dots li.slick-active button{
      background: #0196be;
      width: 15px;
    }

    .slick-dots li{
      margin: 0;
    }
`
const Testimonios = styled.div`
    margin-top: 2rem;
    position: relative;
`
const Buttons = styled.div`
    position: absolute;
    right: 0.7rem;
    bottom: -2rem;

    button{
      background-color: transparent;
      margin-left: 0.5rem;
      border: none;
      color: #0196be;
      cursor: pointer;
      font-size: 1.1rem;
    }

    @media(max-width:530px){
      display: none;
    }
`