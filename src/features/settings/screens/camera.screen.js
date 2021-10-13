import React, { useRef, useState, useEffect, useContext } from "react";
import { View, TouchableOpacity } from "react-native";
import { Text } from "../../../components/typography/text.component";
import AsyncStorage from "@react-native-async-storage/async-storage";

import { Camera } from "expo-camera";
import { CameraButton, ProfileCamera } from "../components/camera.style";
import { AuthenticationContext } from "../../../services/authentication/authentication.context";

export const CameraScreen = ({ navigation }) => {
  const [hasPermission, setHasPermission] = useState(null);
  const cameraRef = useRef();
  const { user } = useContext(AuthenticationContext);

  const snap = async () => {
    if (cameraRef) {
      const photo = await cameraRef.current.takePictureAsync();
      AsyncStorage.setItem(`${user.uid}-photo`, photo.uri);
      navigation.goBack();
    }
  };

  useEffect(() => {
    (async () => {
      const { status } = await Camera.requestCameraPermissionsAsync();
      setHasPermission(status === "granted");
    })();
  }, []);

  if (hasPermission === null) {
    return <View />;
  }

  if (hasPermission === false) {
    return <Text>No access to camera</Text>;
  }

  return (
    <ProfileCamera
      ref={(camera) => (cameraRef.current = camera)}
      type={Camera.Constants.Type.front}
      ratio={"16:9"}
    >
      <CameraButton onPress={snap} icon="camera" color="black">
        Take a picture
      </CameraButton>
    </ProfileCamera>
  );
};
