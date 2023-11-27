import * as styled from "./AccommodationGridView.styles";
import type { GridItemProps } from "./AccommodationGridView.types";

export const AccommodationGridItem: React.FC<GridItemProps> = ({
  imageUrl,
  summary,
  name,
  price
}) => (
  <a href="products/:productDetail">
    <styled.GridItem>
      <styled.GridItemImageWrapper>
        <styled.GridItemImage src={imageUrl} />
      </styled.GridItemImageWrapper>
      <styled.InformationWrapper>
        <styled.InformationSummary>{summary}</styled.InformationSummary>
        <styled.InformationName>{name}</styled.InformationName>
        <styled.InformationPrice>{price}</styled.InformationPrice>
        <styled.InformationPriceTxt>원부터</styled.InformationPriceTxt>
      </styled.InformationWrapper>
    </styled.GridItem>
  </a>
);
