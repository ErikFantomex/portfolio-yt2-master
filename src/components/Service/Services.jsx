import React from "react";
import {GiInjustice} from "react-icons/gi";
import {GiStarfighter} from "react-icons/gi";
import { CgWebsite } from "react-icons/cg";
import styled from "styled-components";
import Card from "./Card";
import { Slide } from "react-awesome-reveal";

const Services = () => {
  return (
    <Container id="service">
      <Slide direction="down">
        <h4>
          Nuestra <span className="green">lucha</span>
        </h4>
        <h1>¿Que hacemos?</h1>
      </Slide>
      <Cards>
        <Slide direction="left">
          <Card
            Icon={GiInjustice}
            title={"Ocupación de los espacios públicos"}
            disc={`El VEME ha sido ejemplo de ello con los
             bazares, tocadas y en su momento los centros de recaudación de firmas. `}
          />
        </Slide>
        <Slide direction="up">
          <Card
            Icon={GiStarfighter}
            title={"Educación  para todxs"}
            disc={` Más de 400 alumnxs aceptados en tronco común después del plantón que hicimos en 
            rectoría por los aspirantes a universitarios que habían sido rechazados.`}
          />
        </Slide>
        <Slide direction="right">
          <Card
            Icon={CgWebsite}
            title={"La intersección por Radio Sonora"}
            disc={`Posicionarse en radio pública con un 
            programa de análisis crítico, reflexión social, cultural y política.`}
          />
        </Slide>
      </Cards>
    </Container>
  );
};

export default Services;

const Container = styled.div`
  width: 80%;
  max-width: 1280px;
  margin: 0 auto;
  padding: 3rem 0;
  @media (max-width: 840px) {
    width: 90%;
  }

  h1 {
    padding-top: 1rem;
  }
`;
const Cards = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  margin-top: 4rem;
  gap: 1rem;
`;
