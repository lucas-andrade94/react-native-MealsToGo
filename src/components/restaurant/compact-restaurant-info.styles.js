import styled from "styled-components/native";
import WebView from "react-native-webview";

export const CompactImage = styled.Image`
  border-radius: ${(props) => props.theme.sizes[0]};
  width: 120px;
  height: 100px;
`;

export const CompactWebView = styled(WebView)`
  border-radius: ${(props) => props.theme.sizes[0]};
  width: 120px;
  height: 100px;
`;

export const Item = styled.View`
  padding: ${(props) => props.theme.sizes[0]};
  max-width: 120px;
  align-items: center;
`;
