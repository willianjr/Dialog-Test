// Pages
import { Error404, HomePage, PerfilPage } from '../../pages'

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
    name: 'Home',
    component: HomePage,
    exact: true,
    auth: false,
  },
  {
    path: '/Perfil/:perfil',
    name: 'Perfil',
    component: PerfilPage,
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
