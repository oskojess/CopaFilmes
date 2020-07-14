import React from 'react';
import { CardStyled, Title, SubTitle, Description, Divider } from './styles';

const Card = ({ title, subtitle, description }) => (
  <CardStyled>
    <Title>{title}</Title>
    <SubTitle>{subtitle}</SubTitle>
    <Divider />
    <Description>{description}</Description>
  </CardStyled>

)

export default Card; 
