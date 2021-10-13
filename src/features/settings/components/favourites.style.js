import styled from "styled-components/native";
import { SafeArea } from "../../../components/utility/safe-area.component";
import { Text } from "../../../components/typography/text.component";

export const NoFavouritesSafeArea = styled(SafeArea)`
  align-items: center;
  justify-content: center;
`;

export const FavouritesTitle = styled(Text)`
  font-size: ${(props) => props.theme.fontSizes.title};
  padding: ${(props) => props.theme.space[3]};
  text-align: center;
`;
