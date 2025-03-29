import RecipePreviewList from "../RecipePreviewList/RecipePreviewList";
import EmptyList from "../EmptyList/EmptyList";
import { fetchAuthUserFavoriteRecipes } from "../../api/foodies";
import { toast } from "react-hot-toast";
import { useEffect, useState } from "react";
import Pagination from "../Pagination/Pagination";

const UserFavorites = () => {
  const [recipes, setRecipes] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  const changeCurrentPage = async (page) => {
    await loadUserRecipes(page);
  };

  const loadUserRecipes = async (page) => {
    try {
      const response = await fetchAuthUserFavoriteRecipes(page);
      setRecipes(response.recipes);
      setCurrentPage(response.currentPage);
      setTotalPages(response.totalPages);
    } catch (error) {
      toast.error("Failed to load recipes!");
    }
  };

  useEffect(() => {
    loadUserRecipes(currentPage);
  }, []);

  return (
    <div>
      {recipes.length > 0 ? (
        <>
          <RecipePreviewList items={recipes} />
          <Pagination
            currentPage={currentPage}
            totalPages={totalPages}
            onPageChange={changeCurrentPage}
          />
        </>
      ) : (
        <EmptyList>
          Nothing has been added to your favorite recipes list yet. Please
          browse our recipes and add your favorites for easy access in the
          future.
        </EmptyList>
      )}
    </div>
  );
};

export default UserFavorites;
