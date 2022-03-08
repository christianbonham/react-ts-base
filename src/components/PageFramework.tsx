import React from 'react';
import { Outlet } from 'react-router-dom';

function PageFramework() {
  return (
    <>
      <p>Page Framework</p>
      <hr />
      <Outlet />
    </>
  );
}

export default PageFramework;
