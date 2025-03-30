import { Toaster } from "react-hot-toast";

const AppLayout = ({ children }) => {
  return (
    <div>
      {children}
      <Toaster position="top-center" reverseOrder={false} />
    </div>
  );
};

export default AppLayout;
