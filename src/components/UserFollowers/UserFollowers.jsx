import EmptyList from "../EmptyList/EmptyList";
import UserCardList from "../UserCardList/UserCardList";
import { fetchUserFollowers } from "../../api/foodies";
import { toast } from "react-hot-toast";
import { useEffect, useState } from "react";
import Pagination from "../Pagination/Pagination";
import Loader from "../Loader/Loader";
import css from "../UserRecipes/UserRecipes.module.css";

const UserFollowers = ({ userId }) => {
  const [followers, setFollowers] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [isLoading, setIsLoading] = useState(true) 

  const changeCurrentPage = async (page) => {
    await loadUserFollowers(page);
  };

  const reloadUserFollowers = async () => {
    await loadUserFollowers(currentPage);
  };

  const loadUserFollowers = async (page) => {
    try {
      const response = await fetchUserFollowers(userId, page);
      setFollowers(
        response.followers.map((follower) => {
          return {
            ...follower,
            isFollowedByAuthUser: response.authUserFollowingIds.includes(
              follower.id,
            ),
          };
        }),
      );
      setIsLoading(true);
      setCurrentPage(response.currentPage);
      setTotalPages(response.totalPages);
    } catch (error) {
      toast.error("Failed to load followers!");
      setIsLoading(false);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    loadUserFollowers(currentPage);
  }, [userId]);

  return (
    <div className={isLoading ? css.loader : ''}>
      {isLoading && <Loader />}
      {followers.length > 0 && !isLoading ? (
        <>
          <UserCardList
            items={followers}
            reloadDataHandler={reloadUserFollowers}
          />
          <Pagination
            currentPage={currentPage}
            totalPages={totalPages}
            onPageChange={changeCurrentPage}
          />
        </>
      ) : ( !isLoading &&
        <EmptyList>
          There are currently no followers on your account. Please engage our
          visitors with interesting content and draw their attention to your
          profile.
        </EmptyList>
      )}
    </div>
  );
};

export default UserFollowers;
