import React, { useRef } from 'react'
import Slider from 'react-slick'
import styled from 'styled-components'
import ClientSlider from './ClientSlider';
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { Slide } from 'react-awesome-reveal';

let clients = [
    {
        name : "Ivonne Lopez",
        position : "Estudiante de la licenciatura en Ingeniería Industrial ",
        img_url : "https://res.cloudinary.com/dmskuffif/image/upload/v1679612780/ivonne_ogch5q.jpg",
        stars : 5,
        disc : `Yo diría que esos han sido nuestros principales logros aunque también y cómo no mencionarlo: comenzamos un taller de fotografía comunitario completamente gratuito en donde se enseña 
        digital y análogo, hasta cianotipia.`
    },
    {
        name : "Eber Cabrera",
        position : "Estudiante de la licenciatura en Física",
        img_url : "https://res.cloudinary.com/dmskuffif/image/upload/v1679612771/eber_j1gwph.jpg",
        stars : 5,
        disc : `Derogación de la Ley Orgánica 4 de la UniSon.`
    },
    {
        name : "Fernini Armenta",
        position : "Estudiante de la licenciatura en Sociología",
        img_url : "https://res.cloudinary.com/dmskuffif/image/upload/v1679612921/Screenshot_20230323-160142_Instagram_ooo2ui.jpg",
        stars : 5,
        disc : `Cancelación por 1 año de la obligatoriedad del examen EGEL.`
    },
    {
        name : "Albatros Parra",
        position : "Estudiante de la licenciatura en Arquitectura",
        img_url : "https://res.cloudinary.com/dmskuffif/image/upload/v1679612759/alba_vbhhbo.jpg",
        stars : 5,
        disc : `Las marchas si bien no las considero un logro; sé que han sido los vehículos que nos 
        han impulsado a obtener algunos de estos cambios.`
    },
    {
        name : "Diego Torres",
        position : "Estudiante de la licenciatura en Ciencias de la computación",
        img_url : "https://res.cloudinary.com/dmskuffif/image/upload/v1679612911/Screenshot_20230323-160002_WhatsApp_oedt9e.jpg",
        stars : 5,
        disc : ` Más de 400 alumnxs aceptados en tronco común después del plantón que hicimos en rectoría por 
        los aspirantes a universitarios que habían sido rechazados.`
    },
    {
        name : "Eduardo Granillo",
        position : "Estudiante de la licenciatura en Física",
        img_url : "https://res.cloudinary.com/dmskuffif/image/upload/v1679613732/grani_v4twuq.jpg",
        stars : 5,
        disc : `Posicionarse en radio pública con un programa de análisis 
        crítico, reflexión social, cultural y política .`
    }
]
var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    initialSlide: 0,
    arrows : false,
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
    ]}

const Clients = () => {
    const arrowRef = useRef(null);
    let clientDisc = "";
    clientDisc = clients.map((item, i) => (
        <ClientSlider item={item} key={i}/>
    ))
  return (
    <Container id='client'>
        <Slide direction="left">
            <span className="green">Testimonios</span>
            <h1>Estimada comunidad</h1>
        </Slide>
        <Testimonials>
            <Slider ref={arrowRef} {...settings}>
                {clientDisc}
            </Slider>
            <Buttons>
                <button
                onClick={() => arrowRef.current.slickPrev()}
                ><IoIosArrowBack/></button>
                <button
                onClick={() => arrowRef.current.slickNext()}
                ><IoIosArrowForward/></button>
            </Buttons>
        </Testimonials>
    </Container>
  )
}

export default Clients

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

    .slick-list, .slick-slider, .slick-track{
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
        background: linear-gradient(159deg, rgb(45, 45, 58) 0%, rgb(11, 11, 18) 100%);
        padding: 0.1rem;
        margin-top: 1rem;
        transition: all 400ms ease-in-out;
        border-radius: 50px;
    }
    
    .slick-dots li.slick-active button{
        background:  #be0120;
        
        width: 15px;
    }

    .slick-dots li{
        margin: 0;
    }
`

const Testimonials = styled.div`
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
        color: #be0120;
        ;
        cursor: pointer;
        font-size: 1.1rem;
    }

    @media(max-width:530px){
        display: none;
    }
`