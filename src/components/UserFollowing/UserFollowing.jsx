import EmptyList from "../EmptyList/EmptyList";
import UserCardList from "../UserCardList/UserCardList";
import { fetchAuthUserFollowing, fetchUserFollowers } from "../../api/foodies";
import { toast } from "react-hot-toast";
import { useEffect, useState } from "react";
import Pagination from "../Pagination/Pagination";
import Loader from "../Loader/Loader";
import css from "../UserRecipes/UserRecipes.module.css";

const UserFollowing = () => {
  const [following, setFollowing] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [isLoading, setIsLoading] = useState(true) 

  const changeCurrentPage = async (page) => {
    await loadUserFollowing(page);
  };

  const reloadUserFollowing = async () => {
    await loadUserFollowing(currentPage);
  };

  const loadUserFollowing = async (page) => {
    try {
      const response = await fetchAuthUserFollowing(page);
      setFollowing(
        response.following.map((user) => {
          return {
            ...user,
            isFollowedByAuthUser: true,
          };
        }),
      );
      setIsLoading(true);
      setCurrentPage(response.currentPage);
      setTotalPages(response.totalPages);
    } catch (error) {
      setIsLoading(false);
      toast.error("Failed to load followers!");
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    loadUserFollowing(currentPage);
  }, []);
  return (
    <div className={isLoading ? css.loader : ''}>
      {isLoading && <Loader />}
      {following.length > 0 && !isLoading ? (
        <>
          <UserCardList
            items={following}
            reloadDataHandler={reloadUserFollowing}
          />
          <Pagination
            currentPage={currentPage}
            totalPages={totalPages}
            onPageChange={changeCurrentPage}
          />
        </>
      ) : ( !isLoading &&
        <EmptyList>
          Your account currently has no subscriptions to other users. Learn more
          about our users and select those whose content interests you.
        </EmptyList>
      )}
    </div>
  );
};

export default UserFollowing;
