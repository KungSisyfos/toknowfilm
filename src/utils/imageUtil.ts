import fallbackImage from "../assets/images/fallback-image.jpg"

const FALLBACK_IMAGE = fallbackImage;
const BASE_IMAGE_URL = "https://image.tmdb.org/t/p";

export const getImageUrl = (path: string | null | undefined): string => {
  if (!path) {
    return FALLBACK_IMAGE;
  }
  
  return `${BASE_IMAGE_URL}/w500${path}`;
};