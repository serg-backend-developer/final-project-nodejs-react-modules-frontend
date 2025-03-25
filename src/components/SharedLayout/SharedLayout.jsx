// src/components/SharedLayout/SharedLayout.jsx
import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../Footer/Footer';

const SharedLayout = () => {
  return (
    <>
      <Outlet />
      <Footer />
    </>
  );
};

export default SharedLayout;