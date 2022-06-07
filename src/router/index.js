import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';

import { pageRouter } from './routerList'

const allRouter = [...pageRouter]

export default function RoutesFunc() {
  // 提前封装好的路由配置函数
  const renderRouter = (router) =>
    router.map((item, index) =>
      item.path ? (
        <Route
          key={index}
          path={item.path}
          element={item.element}
          {...(item.props = {})}
        >
          {item.children && renderRouter(item.children)}
        </Route>
      ) : (
        <Route
          key={index}
          path={item.from}
          element={<Navigate to={item.to} replace />}
        />
      )
    );

  return (
    <Routes>{renderRouter(allRouter)}</Routes>
  );
}