import * as styles from "./Card.styles";
import type { CardProps } from "./Card.types";

const Card = ({ children, label }: CardProps) => (
  <styles.CardContainer>
    {label && (
      <styles.Label>
        <span>{label}</span>
      </styles.Label>
    )}
    {children}
  </styles.CardContainer>
);

export default Card;
