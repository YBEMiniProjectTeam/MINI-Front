import React from "react";
import * as styles from "./Card.styles.ts";
import { CardProps } from "./Card.types.ts";

const Card: React.FC<CardProps> = ({ children }) => (
  <styles.CardContainer>{children}</styles.CardContainer>
);

export default Card;
