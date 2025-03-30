import axios from 'axios';

const BASE_URL = process.env.REACT_APP_API_BASE_URL;

const getRecipeById = async (id) => {
  const response = await axios.get(`${BASE_URL}/recipes/${id}`);
  return response;
};

export default {
  getRecipeById,
};
