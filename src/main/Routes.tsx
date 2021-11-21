import React from 'react'
import { Routes, Route } from 'react-router-dom'

import routes from '../common/config/routes'

export const RoutesComponent = (): JSX.Element => {
  return (
    <Routes>
      {routes.map((route, index) => {
        return <Route key={index} path={route.path} element={<route.component />} />
      })}
    </Routes>
  )
}
