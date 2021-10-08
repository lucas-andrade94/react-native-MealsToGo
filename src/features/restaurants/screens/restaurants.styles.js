import styled from "styled-components/native";
import { ActivityIndicator } from "react-native-paper";

export const SearchContainer = styled.View`
  padding: ${(props) => props.theme.space[3]};
`;

export const LoadingContainer = styled.View`
  position: absolute;
  top: 50%;
  left: 50%;
`;

export const Loading = styled(ActivityIndicator)`
  margin-left: -25px;
`;
