import styled from "styled-components/native";
import { TouchableOpacity } from "react-native";

export const FavouriteButton = styled(TouchableOpacity)`
  position: absolute;
  top: 25px;
  right: 25px;
  z-index: 9;
`;

export const FavouritesWrapper = styled.View`
  padding: ${(props) => props.theme.space[2]};
`;