import React from 'react'
import styled from 'styled-components'
import Slider from "react-slick";
import DeveloperSlider from './DeveloperSlider';

let developers =[
    {
        nombre: "Mauro Moyano",
        puesto: "Developer",
        img_url:"",
        estrellas: 4,
        disc: "He tenido la dicha de poder contar con Ricardo como compañero porque siempre ha encontrado las soluciones mas creativas a los problemas mas insólitos. un gran trabajador en equipo."
    },
    {
        nombre: "Lautario Garcia",
        puesto: "Developer",
        img_url:"",
        estrellas: 4,
        disc: "Agradezco haberlo llegado a conocer, fue un gran compañero durante la cursada y ahora tras haberla terminado. Aportó muchas ideas y conocimientos al grupo y siempre colaboró para ayudar a la comunidad que fue formando."
    },
    {
        nombre: "Ezequiel Lescano",
        puesto: "Developer",
        img_url:"",
        estrellas: 5,
        disc: "Tuve el agrado de ser parte de Team de TA's de SoyHenry  con Ricardo, además de la cursada y encontré no sólo un compañero solidario, Si no también una persona perseverante y trabajadora, que busca superarse siempre."
    },
    {
        nombre: "Mauro Moyano",
        puesto: "Developer",
        img_url:"",
        estrellas: 4,
        disc: "He tenido la dicha de poder contar con Ricardo como compañero porque siempre ha encontrado las soluciones mas creativas a los problemas mas insólitos. un gran trabajador en equipo."
    },
    {
        nombre: "Mauro Moyano",
        puesto: "Developer",
        img_url:"",
        estrellas: 4,
        disc: "He tenido la dicha de poder contar con Ricardo como compañero porque siempre ha encontrado las soluciones mas creativas a los problemas mas insólitos. un gran trabajador en equipo."
    },
    {
        nombre: "Mauro Moyano",
        puesto: "Developer",
        img_url:"",
        estrellas: 4,
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
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

const Developers = () => {
    let developersDisc = "";
    developersDisc = developers.map((item, i)=> (
        <DeveloperSlider item={item} key = {i} />
        ))
  return (
    <Container>
        <span className="blue">Testimonios</span>
        <h1>Que dicen mis colegas?</h1>
        <Testimonios>
            <Slider {...settings}>
                {developersDisc}
            </Slider>
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

    span{
        font-weight: 700;
        text-transform: uppercase;
    }

    h1{
        padding-top: 1rem;
        text-transform: capitalize;
    }
`
const Testimonios = styled.div`

`