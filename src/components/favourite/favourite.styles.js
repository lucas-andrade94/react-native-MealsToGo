import styled from "styled-components/native";
import { TouchableOpacity } from "react-native";
import { Card } from "react-native-paper";

export const FavouriteButton = styled(TouchableOpacity)`
  position: absolute;
  top: 25px;
  right: 25px;
  z-index: 9;
`;

export const FavouritesWrapper = styled(Card)`
  padding: ${(props) => props.theme.space[2]};
  border-radius: ${(props) => props.theme.sizes[1]};
  z-index: 999;
`;
