import axios from 'axios';

const BASE_URL = 'https://project-team-04.onrender.com/api';


const getRecipeById = async (id) => {
  const response = await axios.get(`${BASE_URL}/recipes/${id}`);
  return response;
};

export default {
  getRecipeById
};
