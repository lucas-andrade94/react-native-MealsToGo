import camelize from "camelize";

export const locationRequest = (searchTerm) => {
  return fetch(
    `http://064e-2604-3d09-2a86-c300-b4f0-946c-78a8-13c7.ngrok.io/mealstogo-4599b/us-central1/geocode?city=${searchTerm}`
  ).then((res) => {
    return res.json();
  });
};

export const locationTransform = (result) => {
  const formattedResponse = camelize(result);
  const { geometry = {} } = formattedResponse.results[0];
  const { lat, lng } = geometry.location;

  return { lat, lng, viewport: geometry.viewport };
};
