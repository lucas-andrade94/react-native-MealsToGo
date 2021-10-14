import React, { useContext, useState } from "react";
import { FlatList, TouchableOpacity } from "react-native";
import { Colors } from "react-native-paper";

import { LoadingContainer, Loading } from "./restaurants.styles";

import { SafeArea } from "../../../components/utility/safe-area.component";
import { FadeInView } from "../../../components/animations/fade.animation";
import { RestaurantInfoCard } from "../components/restaurant-info-card.component";
import { RestaurantsContext } from "../../../services/restaurants/restaurants.context";
import { FavouritesContext } from "../../../services/favourites/favourites.context";
import { LocationContext } from "../../../services/location/location.context";
import { Search } from "../components/search.component";
import { Text } from "../../../components/typography/text.component";
import { FavouritesBar } from "../../../components/favourite/favourites-bar.component";
import { Spacer } from "../../../components/spacer/spacer.component";

export const RestaurantsScreen = ({ navigation }) => {
  const { error: locationError } = useContext(LocationContext);
  const {
    restaurants,
    isLoading,
    error: restaurantError,
  } = useContext(RestaurantsContext);
  const { favourites } = useContext(FavouritesContext);
  const [isToggled, setIsToggledd] = useState(false);

  const hasError = !!restaurantError || !!locationError;

  return (
    <>
      <SafeArea>
        {isLoading && (
          <LoadingContainer>
            <Loading size={50} animating={true} color={Colors.blue300} />
          </LoadingContainer>
        )}
        <Search
          isFavouritesToggled={isToggled}
          onFavouritesToggled={() => setIsToggledd(!isToggled)}
        />
        {isToggled && (
          <FavouritesBar
            favourites={favourites}
            onNavigate={navigation.navigate}
          />
        )}
        {hasError && (
          <Spacer position="left" size="large">
            <Text variant="error">
              Something went wrong retrieving the data. Data available only for
              Antwerp, Chicago, San Francisco and Toronto
            </Text>
          </Spacer>
        )}
        {!hasError && (
          <FlatList
            data={restaurants}
            renderItem={({ item }) => {
              return (
                <TouchableOpacity
                  onPress={() =>
                    navigation.navigate("RestaurantDetail", {
                      restaurant: item,
                    })
                  }
                >
                  <FadeInView>
                    <RestaurantInfoCard restaurant={item} />
                  </FadeInView>
                </TouchableOpacity>
              );
            }}
            keyExtractor={(item) => item.name}
          />
        )}
      </SafeArea>
    </>
  );
};
