import axios from "axios";
import { selectToken } from "../redux/auth/authSlice";
import { store } from "../redux/store";

const BASE_URL = process.env.REACT_APP_API_BASE_URL;

const createConfig = () => {
  const token = selectToken(store.getState());
  return {
    headers: { Authorization: `Bearer ${token}` },
  };
};

export const fetchUserRecipes = async (userId, page = 1, limit = 10) => {
  const params = new URLSearchParams({
    page,
    limit,
  });
  const {
    data: { currentPage, recipes, totalPages },
  } = await axios.get(
    `${BASE_URL}/users/${userId}/recipes?${params}`,
    createConfig(),
  );
  return { currentPage, recipes, totalPages };
};

export const fetchUserFollowers = async (userId, page = 1, limit = 10) => {
  const params = new URLSearchParams({
    page,
    limit,
  });
  const {
    data: { currentPage, followers, totalPages },
  } = await axios.get(
    `${BASE_URL}/users/${userId}/followers?${params}`,
    createConfig(),
  );
  return { currentPage, followers, totalPages };
};

export const fetchAuthUserFavoriteRecipes = async (page = 1, limit = 10) => {
  const params = new URLSearchParams({
    page,
    limit,
  });
  const {
    data: { currentPage, recipes, totalPages },
  } = await axios.get(`${BASE_URL}/users/favorites?${params}`, createConfig());
  return { currentPage, recipes, totalPages };
};
