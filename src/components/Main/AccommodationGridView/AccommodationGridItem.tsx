import { useNavigateToDetailPage } from "@hooks/useNavigateToDetailPage";
import * as styled from "./AccommodationGridView.styles";
import type { GridItemProps } from "./AccommodationGridView.types";
import { formatPrice } from "@utils/priceFormatter";

export const AccommodationGridItem: React.FC<GridItemProps> = ({
  id,
  imageUrl,
  summary,
  name,
  price
}) => {
  const { navigateToDetailPage } = useNavigateToDetailPage();

  return (
    <styled.GridItem 
      id="grid-accommodation-item"
      onClick={() => navigateToDetailPage(id)}
    >
      <styled.GridItemImageWrapper>
        <styled.GridItemImage src={imageUrl} />
      </styled.GridItemImageWrapper>
      <styled.InformationWrapper>
        <styled.InformationSummary>{summary}</styled.InformationSummary>
        <styled.InformationName id="grid-accommodation-name">{name}</styled.InformationName>
        <styled.InformationPrice>{formatPrice(price)}</styled.InformationPrice>
        <styled.InformationPriceTxt>원부터</styled.InformationPriceTxt>
      </styled.InformationWrapper>
    </styled.GridItem>
  );
};
