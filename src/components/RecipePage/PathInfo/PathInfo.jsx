import { Link, useLocation } from "react-router-dom";

const PathInfo = () => {
  const location = useLocation();
  const pageTitle = location.pathname.split("/").pop().replace(/-/g, " ");

  return (
    <nav aria-label="breadcrumb">
      <p>
        <Link to="/">Home</Link> / {pageTitle}
      </p>
    </nav>
  );
};

export default PathInfo;