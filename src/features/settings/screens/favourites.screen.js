import React, { useContext } from "react";
import { FlatList, TouchableOpacity } from "react-native";

import { FavouritesContext } from "../../../services/favourites/favourites.context";
import { Spacer } from "../../../components/spacer/spacer.component";
import {
  FavouritesTitle,
  NoFavouritesSafeArea,
} from "../components/favourites.style";
import { RestaurantInfoCard } from "../../restaurants/components/restaurant-info-card.component";
import { SafeArea } from "../../../components/utility/safe-area.component";
import { Text } from "../../../components/typography/text.component";

export const FavouritesScreen = ({ navigation }) => {
  const { favourites } = useContext(FavouritesContext);

  return favourites.length ? (
    <SafeArea>
      <FavouritesTitle variant="label"> My Favourits</FavouritesTitle>
      <FlatList
        data={favourites}
        renderItem={({ item }) => {
          return (
            <TouchableOpacity
              onPress={() =>
                navigation.navigate("RestaurantDetail", {
                  restaurant: item,
                })
              }
            >
              <Spacer position="bottom" size="large">
                <RestaurantInfoCard restaurant={item} />
              </Spacer>
            </TouchableOpacity>
          );
        }}
        keyExtractor={(item) => item.name}
      />
    </SafeArea>
  ) : (
    <NoFavouritesSafeArea>
      <Text>No favourites yet!</Text>
    </NoFavouritesSafeArea>
  );
};
