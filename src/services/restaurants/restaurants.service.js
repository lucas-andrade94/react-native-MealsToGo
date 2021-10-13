import camelize from "camelize";

export const restaurantsRequest = (location = "37.7749295,-122.4194155") => {
  return fetch(
    `http://064e-2604-3d09-2a86-c300-b4f0-946c-78a8-13c7.ngrok.io/mealstogo-4599b/us-central1/placesNearby?location=${location}`
  ).then((res) => {
    return res.json();
  });
};

export const restaurantsTransform = ({ results = [] }) => {
  const mappedResults = results.map((restaurant) => {
    return {
      ...restaurant,
      isOpenNow: restaurant.opening_hours && restaurant.opening_hours.open_now,
      isClosedTemporarily: restaurant.business_status === "CLOSED_TEMPORARILY",
      address: restaurant.vicinity,
    };
  });

  return camelize(mappedResults);
};
