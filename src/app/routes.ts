interface Route {
  name: string;
  path: string;
  authorized: boolean;
  admin: boolean;
}

export const routes: Route[] = [
  {
    name: 'Home',
    path: '',
    authorized: false,
    admin: false
  },
  {
    name: 'Dashboard',
    path: 'dashboard',
    authorized: true,
    admin: false,
  },
  {
    name: 'Github',
    path: 'github',
    authorized: true,
    admin: false,
  },
  {
    name: 'Pull Requests',
    path: 'github/pullrequest',
    authorized: true,
    admin: false,
  },
]