import styled from "styled-components/native";
import { Camera } from "expo-camera";
import { Button } from "react-native-paper";

export const ProfileCamera = styled(Camera)`
  width: 100%;
  height: 100%;
`;

export const CameraButton = styled(Button)`
  position: absolute;
  background-color: red;
  top: 90%;
  left: 25%;
  border-radius: 50px;
`;