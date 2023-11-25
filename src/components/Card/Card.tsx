import * as styles from "./Card.styles.ts";
import type { CardProps } from "./Card.types.ts";

const Card = ({ children }: CardProps) => (
  <styles.CardContainer>{children}</styles.CardContainer>
);

export default Card;
