import React from 'react';
import { dashboardRouteList } from "../../hooks/useRoute";
import { Route, Routes } from 'react-router-dom';
import { Outlet } from 'react-router-dom'; 

const DashboardRoutes = () => {
  return (
    <Routes>
      {dashboardRouteList.map(item => (
        <Route
          key={item.id}
          path={item.path}
          element={item.children.length > 0 ? (
            <>
              {item.element}
              <Outlet />
            </>
          ) : (
            item.element
          )}
        >
          {item.children.map(child => (
            <Route
              key={child.id}
              path={child.path}
              element={child.element}
            />
          ))}
        </Route>
      ))}
    </Routes>
  );
};

export default DashboardRoutes;
