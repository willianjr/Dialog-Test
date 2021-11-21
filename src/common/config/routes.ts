// Pages
import { Error404, HomePage } from '../../pages'

export interface IRoute {
  path: string
  name: string
  exact?: boolean
  component: () => JSX.Element
  auth?: boolean
  level?: number
  isLogado?: boolean
}

const routes: IRoute[] = [
  {
    path: '/',
    name: 'Login',
    component: HomePage,
    exact: true,
    auth: false,
  },
  {
    path: '/Home',
    name: 'Home',
    component: Error404,
    exact: true,
    auth: false,
  },
  {
    path: '*',
    name: 'Error',
    component: Error404,
    exact: true,
  },
]

export default routes
