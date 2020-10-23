/**
 * Generating random coordinates in Amsterdam
 *
 * If we take the spread to be about 52.3 - 52.4 latitude and 4.8 - 5 longitude
 *
 */

export const randomCoordinatesInAmsterdam = {
  latitude: (52.3 + Math.random() / 10).toFixed(6),
  longitude: (4.8 + Math.random() / 5).toFixed(6),
}
