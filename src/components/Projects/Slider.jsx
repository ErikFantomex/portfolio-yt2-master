import React, { useRef } from 'react'
import Slider from 'react-slick';
import Project from './Project';
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import styled from 'styled-components';

let data = [
    {
        img : "https://res.cloudinary.com/dmskuffif/image/upload/v1679606176/Mitin_gg9vtu.jpg",
        disc : "El Manifiesto Comunista es un tratado político escrito por Karl Marx y Friedrich Engels en 1848."
    },
    {
        img : "https://res.cloudinary.com/dmskuffif/image/upload/v1679606176/Matrimonio_xwgvki.jpg",
        disc : " Es uno de los documentos más influyentes en la historia del comunismo y el socialismo."
    },
    {
        img : "https://res.cloudinary.com/dmskuffif/image/upload/v1679606176/Ley_vbxmcz.jpg",
        disc : "El manifiesto comienza con la famosa frase Un fantasma recorre Europa: el fantasma del comunismo"
    },
    {
        img : "https://res.cloudinary.com/dmskuffif/image/upload/v1679606670/Marcha_sqiy84.jpg",
        disc : "luego establece que la historia de la humanidad ha sido una lucha de clases, con los opresores y los oprimidos como las dos fuerzas principales en juego.!"
    },
    {
        img : "https://res.cloudinary.com/dmskuffif/image/upload/v1679606670/Festival_df0pdk.jpg",
        disc : "Marx y Engels argumentan que el capitalismo, que había surgido como resultado de la Revolución Industrial, es un sistema injusto en el que la clase burguesa explota a la clase trabajadora para obtener beneficios."
    },
    {
      img : "https://res.cloudinary.com/dmskuffif/image/upload/v1679607515/Estudiantes_tribu_yaqui_gbtdeg.jpg",
      disc : "Sostienen que la propiedad privada es la causa de la desigualdad y la injusticia social."
    },
    {
      img : "https://res.cloudinary.com/dmskuffif/image/upload/v1679607515/justicia_jznj9f.jpg",
      disc : " Esta sociedad comunista se basaría en la cooperación y la solidaridad en lugar de la competencia y el egoísmo."
    },
    {
      img : "https://res.cloudinary.com/dmskuffif/image/upload/v1679607515/dame_vxe8tr.jpg",
      disc : "Es uno de los textos políticos más influyentes de la historia, y su legado sigue siendo relevante hoy en día."
    }
];

var settings = {
    className: "center",
    centerMode: true,
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 2,
    initialSlide: 0,
    arrows : false,
    responsive: [
      {
        breakpoint: 990,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 2,
          infinite: true,
          dots: false,
          centerMode : false
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
          centerMode : false
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          centerMode : false
        }
      }
    ]
  };
const SliderComp = () => {
  const arrowRef = useRef(null);
    let sliderProject = "";
    sliderProject = data.map((item, i) => (
        <Project item = {item} key={i}/>
    ))
  return (
    <Container>
      <Slider ref={arrowRef} {...settings}>
      {sliderProject}
      </Slider>
      <Buttons>
        <button 
        onClick={() => arrowRef.current.slickPrev()}
        className='back'><IoIosArrowBack/></button>
        <button 
        onClick={() => arrowRef.current.slickNext()}
        className='next'><IoIosArrowForward/></button>
      </Buttons>
    </Container>
  )
}

export default SliderComp;

const Container = styled.div`
  position: relative;
`

const Buttons = styled.div`
  button{
    width: 2rem;
    height: 2rem;
    background-color: rgba(255, 255, 255, 0.100);
    cursor: pointer;
    color: #01be96;
    border: none;
    position: absolute;
    top: 45%;
    right: -1rem;
  }

  .back{
    left: -1rem;
  }
`