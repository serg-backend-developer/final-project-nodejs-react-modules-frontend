import EmptyList from "../EmptyList/EmptyList";
import UserCardList from "../UserCardList/UserCardList";
import { fetchUserFollowers } from "../../api/foodies";
import { toast } from "react-hot-toast";
import { useEffect, useState } from "react";
import Pagination from "../Pagination/Pagination";

const UserFollowers = ({ userId }) => {
  const [followers, setFollowers] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  const changeCurrentPage = async (page) => {
    await loadUserFollowers(page);
  };

  const loadUserFollowers = async (page) => {
    try {
      const response = await fetchUserFollowers(userId, page);
      setFollowers(response.followers);
      setCurrentPage(response.currentPage);
      setTotalPages(response.totalPages);
    } catch (error) {
      toast.error("Failed to load followers!");
    }
  };

  useEffect(() => {
    loadUserFollowers(currentPage);
  }, [userId]);

  return (
    <div>
      {followers.length > 0 ? (
        <>
          <UserCardList items={followers} />
          <Pagination
            currentPage={currentPage}
            totalPages={totalPages}
            onPageChange={changeCurrentPage}
          />
        </>
      ) : (
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
